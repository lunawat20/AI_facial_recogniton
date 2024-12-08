// Retry Button
const retryButton = document.querySelector('.retry-button');
if (retryButton) {
  retryButton.addEventListener('click', () => {
    window.location.href = 'face-capture.html'; // Redirect to the Face Capture page
  });
}

// Continue Button
const continueButton = document.querySelector('.continue-button');
if (continueButton) {
  continueButton.addEventListener('click', () => {
    window.location.href = 'dashboard.html'; // Redirect to the next step
  });
}
