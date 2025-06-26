from django.shortcuts import render, redirect
from django.views import generic as views

from resume_builder.resumes.forms import GeneralResumeForm


def create_general_resume(request):
    if request.method == 'POST':
        form = GeneralResumeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('create resume')
    else:
        form = GeneralResumeForm()

    context = {
        'form': form,
        # 'contact_fields': contact_fields
    }

    return render(request, 'resumes/resume-create.html', context)
