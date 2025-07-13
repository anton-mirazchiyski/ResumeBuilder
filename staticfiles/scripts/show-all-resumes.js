const resumeContainerElements = document.querySelectorAll('.single-resume-container');


resumeContainerElements.forEach(resumeContainerElement => {
    const buttonLinksElement = resumeContainerElement.querySelector('.single-resume-btn-links');

    resumeContainerElement.addEventListener('mouseover', () => {
        buttonLinksElement.style.visibility = 'visible';
    });

    resumeContainerElement.addEventListener('mouseout', () => {
        buttonLinksElement.style.visibility = 'hidden';
    });
});
