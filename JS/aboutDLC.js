document.getElementById('play-text').addEventListener('click', function() {
    var video = document.getElementById('dlc-video');
    var overlayImg = document.querySelector('.overlay-img');
    
    // Hide the overlay image and play text
    overlayImg.style.opacity = '0';
    overlayImg.style.visibility = 'hidden';
    this.style.opacity = '0';
    this.style.visibility = 'hidden';
    
    // Play the video
    video.play();
});
