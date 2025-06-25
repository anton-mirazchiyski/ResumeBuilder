from django import forms

from resume_builder.resumes.models import GeneralResume


class GeneralResumeForm(forms.ModelForm):
    class Meta:
        model = GeneralResume
        fields = '__all__'
