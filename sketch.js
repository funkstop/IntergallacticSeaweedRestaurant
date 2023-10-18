const image = document.getElementById('image');

// Function to handle the image transition on click
function transitionImage() {
    if (image.src.endsWith('Restaurant.png')) {
        image.src = 'Interior.png';
    } else {
        image.src = 'Restaurant.png';
    }
}

// Add a click event listener to trigger the transition
image.addEventListener('click', () => {
    image.style.opacity = 0; // Fade out
    setTimeout(transitionImage, 500); // Change the image after 500ms
    setTimeout(() => {
        image.style.opacity = 1; // Fade in the new image
    }, 1000); // Wait for 1 second to fade in
});
