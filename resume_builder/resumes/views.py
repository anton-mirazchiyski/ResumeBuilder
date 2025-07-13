from django.shortcuts import render, redirect
from django.views import generic as views

from resume_builder.core.util_functions.resume_utils import set_name_for_a_resume
from resume_builder.resumes.forms import GeneralResumeForm
from resume_builder.resumes.models import GeneralResume


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


def show_all_created_resumes(request):
    created_resumes = GeneralResume.objects.all()

    context = {
        'resumes': created_resumes,
    }

    return render(request, 'resumes/resumes-all.html', context)
