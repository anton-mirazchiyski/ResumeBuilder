from django.urls import path

from resume_builder.resumes.views import create_general_resume, delete_resume, show_all_created_resumes, show_resume

urlpatterns = [
    path('', show_all_created_resumes, name='show all resumes'),
    path('create/', create_general_resume, name='create resume'),
    path('<int:pk>/', show_resume, name='show resume'),
    path('<int:pk>/delete/', delete_resume, name='delete resume'),
]
