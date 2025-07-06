from django.contrib import admin

from resume_builder.resumes.models import GeneralResume

class GeneralResumeAdmin(admin.ModelAdmin):
    fieldsets = [
        (
            None,
            {
                'fields': ['resume_name']
            }
        ),
        (
            'Contact info',
            {
                'fields': ['person_name', 'email', 'phone_number', 'linkedin_profile']
            }
        ),
        (
            'Sections',
            {
                'classes': ['collapse'],
                'fields': ['summary', 'education', 'work_experience', 'skills']
            }
        )
    ]


admin.site.register(GeneralResume, GeneralResumeAdmin)
