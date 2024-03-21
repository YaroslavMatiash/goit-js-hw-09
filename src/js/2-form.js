document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('.feedback-input');
  const messageTextarea = feedbackForm.querySelector('.feedback-textarea');

  function saveFormData() {
    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  function loadFormData() {
    const savedFormData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (savedFormData) {
      emailInput.value = savedFormData.email || '';
      messageTextarea.value = savedFormData.message || '';
    }
  }

  loadFormData();

  feedbackForm.addEventListener('input', event => {
    saveFormData();
  });

  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    if (emailInput.value.trim() === '' || messageTextarea.value.trim() === '') {
      console.error('Fields cannot be empty');
      return;
    }

    const formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };

    console.log('Form submitted:', formData);

    localStorage.removeItem('feedback-form-state');

    emailInput.value = '';
    messageTextarea.value = '';
  });
});
