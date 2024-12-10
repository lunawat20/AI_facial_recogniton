// Access video, canvas, and buttons
const video = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('capture-btn');
const downloadBtn = document.getElementById('download-btn');
const capturedImage = document.getElementById('captured-image');

// Request access to the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error('Error accessing webcam:', error);
    alert('Cannot access the webcam. Please grant permission.');
  });

// Capture button click event
captureBtn.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Show captured image
  capturedImage.src = canvas.toDataURL('image/png');
  capturedImage.style.display = 'block';

  // Show download button
  downloadBtn.style.display = 'inline-block';
});

// Download button click event
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'capture.png';
  link.click();
});
