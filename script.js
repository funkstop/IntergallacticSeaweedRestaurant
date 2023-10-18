let imageElement;
let speechOutput;
let speech;

function setup() {
    noCanvas(); // Don't create a canvas
    imageElement = document.getElementById('image');
    speechOutput = select('#speechOutput');

    // Initialize p5.Speech
    speech = new p5.Speech();

    // Set speech rate (speed) and pitch (tone)
    speech.setRate(0.9); // Set speech rate to 0.9 (adjust as needed)
    speech.setPitch(1.2); // Set speech pitch to 1.2 (adjust as needed)

    // Function to handle the image transition on click
    function transitionImage() {
        if (imageElement.src.endsWith('Restaurant.png')) {
            imageElement.src = 'Interior.png';
            speech.speak("Welcome to Earth's Intergalactic Seaweed Restaurant. Please select an item from the menu.");
        } else {
            // Check if the current image is 'Interior.png' before changing the page
            if (imageElement.src.endsWith('Interior.png')) {
                window.location.href = 'index2.html'; // Redirect to index2.html
            } else {
                imageElement.src = 'Restaurant.png';
            }
        }
    }

    // Add a click event listener to trigger the transition
    imageElement.addEventListener('click', () => {
        imageElement.style.opacity = 0; // Fade out
        setTimeout(transitionImage, 500); // Change the image after 500ms
        setTimeout(() => {
            imageElement.style.opacity = 1; // Fade in the new image
        }, 1000); // Wait for 1 second to fade in
    });
}



