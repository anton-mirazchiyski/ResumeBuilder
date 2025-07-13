from django.urls import path

from resume_builder.resumes.views import create_general_resume, show_all_created_resumes

urlpatterns = [
    path('', show_all_created_resumes, name='show all resumes'),
    path('create/', create_general_resume, name='create resume'),
]
