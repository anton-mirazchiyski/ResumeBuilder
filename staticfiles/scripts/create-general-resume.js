const nameInputElement = document.querySelector('.general-resume-form-input.name-input');
const livePreviewNameElement = document.querySelector('.live-preview-container .name');


nameInputElement.addEventListener('input', (e) => {
    livePreviewNameElement.textContent = e.target.value;
});
