navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(function(stream) {
    // Use the stream (e.g., attach to a video element)
    const video = document.querySelector('video');
    if (video) {
      video.srcObject = stream;
    }
  })
  .catch(function(err) {
    console.error('Error accessing media devices.', err);
  });