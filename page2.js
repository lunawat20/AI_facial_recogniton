const video = document.getElementById('camera');
const captureButton = document.getElementById('capture-btn');
const helpButton = document.getElementById('help-btn');
const helpModal = document.getElementById('help-modal');
const closeHelpButton = document.getElementById('close-help');

// Access the camera
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error('Error accessing the camera:', error);
  });

// Show Help Modal
helpButton.addEventListener('click', () => {
  helpModal.classList.remove('hidden');
});

// Close Help Modal
closeHelpButton.addEventListener('click', () => {
  helpModal.classList.add('hidden');
});

// Auto Capture on button click (for demonstration, logs a capture message)
captureButton.addEventListener('click', () => {
  console.log('Captured frame!');
});
