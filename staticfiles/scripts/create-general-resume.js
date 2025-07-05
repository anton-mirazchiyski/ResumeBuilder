const nameInputElement = document.querySelector('.general-resume-form-input.name-input');
const emailInputElement = document.querySelector('.email-input');
const phoneInputElement = document.querySelector('.phone-number-input');
const linkedinProfileInputElement = document.querySelector('.linkedin-profile-input');
const summaryInputElement = document.querySelector('.summary-input');
const educationInputElement = document.querySelector('.education-input');
const skillsInputElement = document.querySelector('.skills-input');

const livePreviewNameElement = document.querySelector('.live-preview-container .name');
const livePreviewEmailElement = document.querySelector('.live-preview-container .email');
const livePreviewPhoneElement = document.querySelector('.live-preview-container .phone');
const livePreviewLinkedinElement = document.querySelector('a.linkedin-profile-link');
let livePreviewPhoneNumberElement;

const livePreviewSummaryElement = document.querySelector('.summary-section > p');
const livePreviewSummaryHeadingElement = document.querySelector('.summary-section > h3');
const livePreviewEducationElement = document.querySelector('.live-preview-container .education-section');
const livePreviewSkillsElement = document.querySelector('.skills-section div');


nameInputElement.addEventListener('input', (e) => {
    livePreviewNameElement.textContent = e.target.value;
});

emailInputElement.addEventListener('input', (e) => {
    livePreviewEmailElement.textContent = e.target.value;
});

phoneInputElement.addEventListener('focus', (e) => {
    if (livePreviewPhoneElement.textContent === '') {
        livePreviewPhoneElement.textContent = 'Phone: ';
        livePreviewPhoneNumberElement = document.createElement('span');
        livePreviewPhoneElement.appendChild(livePreviewPhoneNumberElement);
    }
});

phoneInputElement.addEventListener('input', (e) => {
    livePreviewPhoneNumberElement.textContent = e.target.value;
});

phoneInputElement.addEventListener('blur', (e) => {
    if (livePreviewPhoneElement.textContent === 'Phone: ') {
        livePreviewPhoneElement.textContent = '';
    }
});

linkedinProfileInputElement.addEventListener('input', (e) => {
    livePreviewLinkedinElement.setAttribute('href', e.target.value);

    e.target.value ? livePreviewLinkedinElement.textContent = 'Linkedin' : livePreviewLinkedinElement.textContent = '';
});

summaryInputElement.addEventListener('focus', (e) => {
    setInterval(() => {
        if (e.target.value) {
            livePreviewSummaryElement.textContent = e.target.value;
        } else {
            livePreviewSummaryElement.textContent = '';
        }
    }, 1000);
});

educationInputElement.addEventListener('input', (e) => {
    const content = e.target.value;
});


let timer;

skillsInputElement.addEventListener('input', (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        addSkillsToLivePreview(e);
    }, 2000);
});


function addSkillsToLivePreview(e) {
    const content = e.target.value;
    const skills = content.split(', ');

    Array.from(livePreviewSkillsElement.children).forEach(child => {
        if (!skills.includes(child)) {
            livePreviewSkillsElement.removeChild(child);
        }
    });

    skills.forEach(skill => {
        if (!livePreviewSkillsElement.textContent.includes(skill)) {
            const spanElement = document.createElement('span');
            spanElement.textContent = skill;
            livePreviewSkillsElement.appendChild(spanElement);
        }
    });
};
