document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('.feedback-input');
  const messageTextarea = feedbackForm.querySelector('.feedback-textarea');

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    emailInput.value = savedFormData.email || '';
    messageTextarea.value = savedFormData.message || '';
  }

  feedbackForm.addEventListener('input', event => {
    const formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

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
