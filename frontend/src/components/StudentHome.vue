<template>
  <div class="home-page">

    <!-- Welcome Card -->
    <div class="welcome-card">
      <h1 class="welcome-name">Hi Barri Soma Sree Vaishnavi,</h1>
      <p class="welcome-date">Good Morning, {{ getCurrentDay() }} {{ getCurrentDate() }}</p>
      
      <router-link to="/schedule" class="schedule-link">
        <div class="schedule-text">Schedule</div>
        <FeatherIcon name="chevron-right" class="w-6 h-6 text-gray-600" />
      </router-link>
    </div>

    <!-- Essentials Section -->
    <!-- <h2 class="section-title">ESSENTIALS</h2> -->
    
    <div class="cards-grid">
      <!-- Attendance Card -->
      <router-link to="/attendance" class="card attendance-card">
        <div class="card-icon attendance-icon">
          <FeatherIcon name="calendar" class="w-6 h-6 text-white" />
        </div>
        <div class="card-title">Attendance</div>
      </router-link>

      <!-- Fee Payments Card -->
      <router-link to="/fees" class="card fee-card">
        <div class="card-icon fee-icon">
          <FeatherIcon name="credit-card" class="w-6 h-6 text-white" />
        </div>
        <div class="card-title">Fee Payments</div>
      </router-link>

      <!-- Schedule Card (was Campus Events) -->
      <router-link to="/schedule" class="card events-card">
        <div class="card-icon events-icon">
          <FeatherIcon name="map-pin" class="w-6 h-6 text-white" />
        </div>
        <div class="card-title">Schedule</div>
      </router-link>

      <!-- Grades Card (was Campus Clubs) -->
      <router-link to="/grades" class="card clubs-card">
        <div class="card-icon clubs-icon">
          <FeatherIcon name="users" class="w-6 h-6 text-white" />
        </div>
        <div class="card-title">Grades</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { FeatherIcon } from 'frappe-ui'

// Get current date in the format "Saturday, 17 May"
function getCurrentDay() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const today = new Date()
  return days[today.getDay()] + ','
}

function getCurrentDate() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const today = new Date()
  const day = today.getDate()
  const month = months[today.getMonth()]
  return `${day} ${month}`
}
</script>

<style scoped>
.home-page {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;
  background-color: white;
}

.menu-button {
  position: absolute;
  left: 1rem;
  cursor: pointer;
}

.logo-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.logo {
  height: 3rem;
  width: auto;
}

.welcome-card {
  background-color: white;
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.welcome-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.welcome-date {
  color: #4b5563;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.schedule-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 0.5rem;
  text-decoration: none;
}

.schedule-text {
  font-weight: 600;
  font-size: 1.1rem;
  color: #1f2937;
}

.section-title {
  padding: 1rem 1.5rem 0.5rem;
  font-weight: 600;
  color: #1f2937;
  font-size: 1rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0 1rem;
}

.card {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:active {
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.attendance-card {
  background-color: #f0f9eb;
}

.fee-card {
  background-color: #fdeeee;
}

.events-card {
  background-color: #f3f0ff;
}

.clubs-card {
  background-color: #e6f7f8;
}

.card-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.attendance-icon {
  background-color: #8bc34a;
}

.fee-icon {
  background-color: #f87171;
}

.events-icon {
  background-color: #7c3aed;
}

.clubs-icon {
  background-color: #38b2ac;
}

.card-title {
  font-weight: 600;
  color: #1f2937;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.card-divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 0.5rem 0;
}

.card-stat-label {
  font-size: 0.85rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
}

.card-stat-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.card-stat-date {
  font-size: 0.75rem;
  color: #9ca3af;
}

.tools-container {
  padding: 0 1rem;
  margin-bottom: 2rem;
}

.tool-card {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.tool-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  background-color: #fecaca;
}

.tool-title {
  font-weight: 600;
  color: #1f2937;
  font-size: 1rem;
}
</style>