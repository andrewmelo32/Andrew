function drawSun( context, canvasHeight ) {
    // Create an image element for the Sun sprite
    const sunImage = new Image();
    sunImage.src = './assets/Sun.png';

    // Wait for the image to load before drawing it
    sunImage.onload = function() {
        // Draw the Sun sprite on the canvas
        context.drawImage(sunImage, 0 - 236, (canvasHeight / 2) - (256 * (1.5/2)), 256 * 1.5, 256 * 1.5); // Adjust the size and position as needed
    };
}

export default drawSun;