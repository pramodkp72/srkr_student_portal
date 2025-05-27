<template>
  <div class="w-full h-full">
    <ScheduleXCalendar
      v-if="!scheduleResource.loading && scheduleResource.data"
      :events="events"
    />
  </div>
</template>

<script setup>
import ScheduleXCalendar from '@/components/ScheduleXCalendar.vue'
import { createResource } from 'frappe-ui'
import { ref } from 'vue'
import { studentStore } from '@/stores/student'
const { getCurrentProgram, getStudentGroups } = studentStore()

const programName = ref(getCurrentProgram()?.value?.program)
const studentGroup = ref(getStudentGroups().value)
const events = ref([])

const formatTime = (timeStr) => {
  const parts = timeStr.split(':')
  const hours = parts[0].padStart(2, '0')
  const minutes = parts[1]
  return `${hours}:${minutes}`
}

const scheduleResource = createResource({
  url: 'education.education.api.get_course_schedule_for_student',
  params: {
    program_name: programName.value,
    student_groups: studentGroup.value,
  },
  onSuccess: (response) => {
    let schedule = []
    response.forEach((classSchedule, index) => {
      console.log('classSchedule', classSchedule)
      const startDateTime = `${classSchedule.schedule_date} ${formatTime(classSchedule.from_time)}`
      const endDateTime = `${classSchedule.schedule_date} ${formatTime(classSchedule.to_time)}`
      schedule.push({
        id: index,
        title: classSchedule.title,
        start: startDateTime,
        end: endDateTime,
        with: classSchedule.instructor,
        name: classSchedule.name,
        room: classSchedule.room,
        date: classSchedule.schedule_date,
        from_time: classSchedule.from_time.split('.')[0],
        to_time: classSchedule.to_time.split('.')[0],
        color: classSchedule.class_schedule_color,
      })
    })
    events.value = schedule
  },
  auto: true,
})
</script>

<style></style>
