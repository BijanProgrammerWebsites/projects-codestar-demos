const STATUS_CLASS_NAME = 'fixed';

const toggleStatus = () => {
    const article = document.querySelector('body > article');
    article?.classList.toggle(STATUS_CLASS_NAME);
};

const toggleStatusButton = document.querySelector('#toggle-status-button');
toggleStatusButton?.addEventListener('click', () => toggleStatus());
