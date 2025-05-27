import frappe

@frappe.whitelist()
def get_user_info():
    """Direct implementation - call the original education function"""
    try:
        # Import and call the original function directly
        from education.education.api import get_user_info as original_get_user_info
        return original_get_user_info()
    except Exception as e:
        frappe.log_error(f"Error in get_user_info override: {str(e)}")
        return {"error": str(e)}

@frappe.whitelist() 
def get_student_info():
    """Call original education function"""
    try:
        from education.education.api import get_student_info as original_get_student_info
        return original_get_student_info()
    except Exception as e:
        return {"error": str(e)}

@frappe.whitelist()
def get_school_abbr_logo():
    """Call original education function"""
    try:
        from education.education.api import get_school_abbr_logo as original_get_school_abbr_logo
        return original_get_school_abbr_logo()
    except Exception as e:
        return {"error": str(e)}