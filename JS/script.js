document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Form submission prevented to handle through JavaScript

    // Gather form data
    var formData = new FormData(this);
    var formDataObject = {};
    formData.forEach(function(value, key){
        formDataObject[key] = value;
    });

    // Here you can handle form submission, for now, just log the data
    console.log("Form data:", formDataObject);
    
    // Optionally, you can send this data to a server using AJAX
    // Example:
    // fetch('submit.php', {
    //     method: 'POST',
    //     body: JSON.stringify(formDataObject),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => {
    //     // Handle response from server
    // }).catch(error => {
    //     console.error('Error:', error);
    // });
});
