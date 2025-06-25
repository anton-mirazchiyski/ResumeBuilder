from django.urls import path

from resume_builder.resumes.views import CreateResumeView

urlpatterns = [
    path('create/', CreateResumeView.as_view(), name='create resume'),
]
