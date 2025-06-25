from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class BaseResume(models.Model):
    MAX_LENGTH_RESUME_NAME = 50
    MAX_LENGTH_PERSON_NAME = 100

    resume_name = models.CharField(max_length=MAX_LENGTH_RESUME_NAME, unique=True, null=False, blank=True)

    person_name = models.CharField(max_length=MAX_LENGTH_PERSON_NAME, null=False, blank=False)

    email = models.EmailField(null=False, blank=False)

    phone_number = PhoneNumberField(null=False, blank=False)

    linkedin_profile = models.URLField(null=True, blank=True)

    summary = models.TextField(null=True, blank=True)

    education = models.TextField(null=False, blank=False)

    work_experience = models.TextField(null=True, blank=True)

    skills = models.TextField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True, null=False, blank=True)

    updated_at = models.DateTimeField(auto_now=True, null=False, blank=True)

    class Meta:
        abstract = True
