const formSectionElements = document.querySelectorAll('.general-resume-form-sections > section');

const previewSummarySectionElement = document.querySelector('.live-preview-container .summary-section');
const previewExperienceSectionElement = document.querySelector('.live-preview-container .experience-section');
const previewSkillsSectionElement = document.querySelector('.live-preview-container .skills-section');

const addSectionButtonsElements = document.querySelectorAll('.general-resume-add-section-btns button');

const [summarySection, educationSection, experienceSection, skillsSection] = formSectionElements;
const [addSummaryBtnElement, addExperienceBtnElement, addSkillsBtnElement] = addSectionButtonsElements;


formSectionElements.forEach(sectionElement => {  
    const removeSectionButtonElement = sectionElement.getElementsByTagName('button')[0];
    if (!removeSectionButtonElement) {
        return;
    }
    
    removeSectionButtonElement.addEventListener('click', () => {
        removeSection(sectionElement);
    });
});

function removeSection(sectionElement) {
    sectionElement.style.display = 'none';

    if (sectionElement.classList.contains('general-resume-summary')) {
        previewSummarySectionElement.style.display = 'none';
        addSummaryBtnElement.style.display = 'block';

    } else if (sectionElement.classList.contains('general-resume-work-experience')) {
        previewExperienceSectionElement.style.display = 'none';
        addExperienceBtnElement.style.display = 'block'

    } else if (sectionElement.classList.contains('general-resume-skills')) {
        previewSkillsSectionElement.style.display = 'none';
        addSkillsBtnElement.style.display = 'block';
    }
}

addSummaryBtnElement.addEventListener('click', (e) => {
    [summarySection, previewSummarySectionElement].forEach(element => element.style.display = 'flex');
    e.target.style.display = 'none';
});

addExperienceBtnElement.addEventListener('click', (e) => {
    [experienceSection, previewExperienceSectionElement].forEach(element => element.style.display = 'flex');
    e.target.style.display = 'none';
});

addSkillsBtnElement.addEventListener('click', (e) => {
    [skillsSection, previewSkillsSectionElement].forEach(element => element.style.display = 'flex');
    e.target.style.display = 'none';
});
