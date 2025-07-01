from django import forms
from phonenumber_field.widgets import RegionalPhoneNumberWidget

from resume_builder.core.mixins.form_mixins import FormFieldAttributesMixin
from resume_builder.resumes.models import GeneralResume


class GeneralResumeForm(FormFieldAttributesMixin, forms.ModelForm):
    class Meta:
        model = GeneralResume
        exclude = ['resume_name']

        labels = {
            'person_name': 'Name',
        }

        widgets = {
            'person_name': forms.TextInput(attrs={}),
            'email': forms.EmailInput(attrs={}),
            'phone_number': RegionalPhoneNumberWidget(attrs={}),
            'linkedin_profile': forms.URLInput(attrs={}),
            
            'summary': forms.Textarea(attrs={'rows': 6}),
            'education': forms.Textarea(attrs={'rows': 8}),
            'work_experience': forms.Textarea(attrs={'rows': 8}),
            'skills': forms.Textarea(attrs={'rows': 5})
        }

    def __init__(self, *args, **kwargs):
        super(GeneralResumeForm, self).__init__(*args, **kwargs)

        self.set_attributes_to_all_fields(self.fields.values())
        
        larger_fields = [field for field in self.fields.values() if isinstance(field.widget, forms.Textarea)]
        self.set_attributes_to_larger_fields(larger_fields)

        specific_class_names = {
            'person_name': ' name-input', 'email': ' email-input', 'phone_number': ' phone-number-input', 'linkedin_profile': ' linkedin-profile-input',
            'summary': ' summary-input', 'skills': ' skills-input',
        }
        self.set_specific_class_names(self.fields.items(), specific_class_names)

        placeholders = {
            'person_name': 'e.g. Ivan Ivanov',
            'email': 'e.g. ivan.ivanov@gmail.com',
            'phone_number': 'your phone number',
            'linkedin_profile': 'your linkedin profile link',
        }
        self.set_placeholders(self.fields.items(), placeholders)
