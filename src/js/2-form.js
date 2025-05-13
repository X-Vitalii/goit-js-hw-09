let formData = {email: '', message: ''};

const storageKey = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

const {email, message} = feedbackForm.elements;

initForm();

feedbackForm.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
    
});

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    if(email.value.trim() === "" || message.value.trim() === "") {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    localStorage.removeItem(storageKey);
    formData = {email: '', message: ''};
    email.value = '';
    message.value = '';
})

function initForm() {
    try {
        const storageData = JSON.parse(localStorage.getItem(storageKey));
        if(storageData === null) {
            return;
        }
        formData.email = storageData.email;
        formData.message = storageData.message;
        email.value = storageData.email;
        message.value = storageData.message;

    } catch (error) {
        console.log(error);
    }
    
}