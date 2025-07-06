import re

from resume_builder.resumes.models import GeneralResume


def set_name_for_a_resume(resume):
    name_parts = [*resume.person_name.split(' '), 'Resume']
    initial_name = '-'.join(name_parts)

    pattern = r'^[A-Z][a-z]+-([A-Z][a-z]+-)*Resume\d*$'
    digit_pattern = r'\d+$'
    last_resume = GeneralResume.objects.filter(resume_name__regex=pattern).last()

    if not last_resume:
        resume.resume_name = initial_name
        return
    
    number = re.search(digit_pattern, last_resume.resume_name)

    new_name = None
    
    if number:
        new_resume_number = int(number.group()) + 1
        new_name = re.sub(digit_pattern, str(new_resume_number), last_resume.resume_name)
    else:
        new_name = last_resume.resume_name + '1'

    resume.resume_name = new_name
