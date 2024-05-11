// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values of email, username, and password fields
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create an object with the user data
    const userData = {
        email: email,
        username: username,
        password: password
    };

    // Send an HTTP POST request to the server with the user data
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            console.log('User data submitted successfully');
            // Redirect to another page
            window.location.href = '/index.html'; // Change the URL as needed
        } else {
            console.error('Failed to submit user data');
            // Handle errors or display error messages to the user
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

