from django.urls import path

from resume_builder.resumes.views import create_general_resume

urlpatterns = [
    path('create/', create_general_resume, name='create resume'),
]
