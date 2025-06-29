const nameInputElement = document.querySelector('.general-resume-form-input.name-input');
const emailInputElement = document.querySelector('.email-input');
const phoneInputElement = document.querySelector('.phone-number-input');

const livePreviewNameElement = document.querySelector('.live-preview-container .name');
const livePreviewEmailElement = document.querySelector('.live-preview-container .email');
const livePreviewPhoneElement = document.querySelector('.live-preview-container .phone');
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
    console.log(livePreviewPhoneElement.children);
    
});

phoneInputElement.addEventListener('input', (e) => {
    livePreviewPhoneNumberElement.textContent = e.target.value; 
});

phoneInputElement.addEventListener('blur', (e) => {
    if (livePreviewPhoneElement.textContent === 'Phone: ') {
        livePreviewPhoneElement.textContent = '';
    }
});
