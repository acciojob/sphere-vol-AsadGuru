function volume_sphere() {
    //Write your code here

// Retrieve the radius value from the input field
    var radiusInput = document.getElementById('radius').value;

    // Convert the radius value to a number
    var radius = parseFloat(radiusInput);

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        // alert('Please enter a valid non-negative number for the radius.');
        return;
    }

    // Calculate the volume of the sphere
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the designated output field
    var volumeField = document.getElementById('volume');
    volumeField.value = volume.toFixed(4); // Round to four decimal places
}

// Attach the volume_sphere function to the form's submit event
document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    volume_sphere(); // Call the function to perform the calculation
}); 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
