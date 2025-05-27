app_name = "srkr_student_portal"
app_title = "SRKR Student Portal"
app_publisher = "Your Name"
app_description = "Custom Student Portal for SRKR"
app_version = "0.0.1"

# Route overrides
website_route_rules = [
    {"from_route": "/student", "to_route": "/custom-student"},
]

# Override specific API methods
override_whitelisted_methods = {
    "education.education.api.get_user_info": "srkr_student_portal.overrides.student_api.get_user_info",
    "education.education.api.get_student_info": "srkr_student_portal.overrides.student_api.get_student_info",
    "education.education.api.get_school_abbr_logo": "srkr_student_portal.overrides.student_api.get_school_abbr_logo",
}