from django.shortcuts import render, redirect
from django.views import generic as views

from resume_builder.core.util_functions.resume_utils import set_name_for_a_resume
from resume_builder.resumes.forms import GeneralResumeForm


def create_general_resume(request):
    if request.method == 'POST':
        form = GeneralResumeForm(request.POST)
        if form.is_valid():
            resume = form.save(commit=False)
            set_name_for_a_resume(resume)
            resume.save()
            return redirect('create resume')
    else:
        form = GeneralResumeForm()

    context = {
        'form': form,
    }

    return render(request, 'resumes/resume-create.html', context)
