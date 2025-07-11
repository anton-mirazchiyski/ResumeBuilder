const formSectionElements = document.querySelectorAll('.general-resume-form-sections > section');

const previewSummarySectionElement = document.querySelector('.live-preview-container .summary-section');
const previewExperienceSectionElement = document.querySelector('.live-preview-container .experience-section');
const previewSkillsSectionElement = document.querySelector('.live-preview-container .skills-section');


formSectionElements.forEach(sectionElement => {  
    const removeSectionButtonElement = sectionElement.getElementsByTagName('button')[0];
    if (!removeSectionButtonElement) {
        return
    }
    
    removeSectionButtonElement.addEventListener('click', () => {
        removeSection(sectionElement);
    });
});

function removeSection(sectionElement) {
    sectionElement.style.display = 'none';

    if (sectionElement.classList.contains('general-resume-summary')) {
        previewSummarySectionElement.style.display = 'none';
    } else if (sectionElement.classList.contains('general-resume-work-experience')) {
        previewExperienceSectionElement.style.display = 'none';
    } else if (sectionElement.classList.contains('general-resume-skills')) {
        previewSkillsSectionElement.style.display = 'none';
    }
}
