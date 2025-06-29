const nameInputElement = document.querySelector('.general-resume-form-input.name-input');
const emailInputElement = document.querySelector('.email-input');
const phoneInputElement = document.querySelector('.phone-number-input');
const linkedinProfileInputElement = document.querySelector('.linkedin-profile-input');

const livePreviewNameElement = document.querySelector('.live-preview-container .name');
const livePreviewEmailElement = document.querySelector('.live-preview-container .email');
const livePreviewPhoneElement = document.querySelector('.live-preview-container .phone');
const livePreviewLinkedinElement = document.querySelector('a.linkedin-profile-link');
let livePreviewPhoneNumberElement;


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
