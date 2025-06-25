from django.shortcuts import render
from django.views import generic as views

from resume_builder.resumes.forms import GeneralResumeForm


class CreateResumeView(views.CreateView):
    form_class = GeneralResumeForm
    template_name = 'resumes/resume-create.html'
