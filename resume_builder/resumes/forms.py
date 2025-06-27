from django import forms

from resume_builder.resumes.models import GeneralResume


class GeneralResumeForm(forms.ModelForm):
    class Meta:
        model = GeneralResume
        exclude = ['resume_name']

        labels = {
            'person_name': 'Name',
        }

        widgets = {
            'summary': forms.Textarea(attrs={'rows': 6}),
            'education': forms.Textarea(attrs={'rows': 8}),
            'work_experience': forms.Textarea(attrs={'rows': 8}),
            'skills': forms.Textarea(attrs={'rows': 5})
        }

    def __init__(self, *args, **kwargs):
        super(GeneralResumeForm, self).__init__(*args, **kwargs)
        for _, field in self.fields.items():
            field.widget.attrs['class'] = 'general-resume-form-input'
            field.widget.attrs['size'] = '35'
        
        self.fields['person_name'].widget.attrs['class'] += ' ' + 'name-input'
        self.fields['skills'].widget.attrs['class'] += ' ' + 'skills-section-input'
