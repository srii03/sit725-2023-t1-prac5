document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form inputs
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create an object with the user data
    const userData = {
        email: email,
        username: username,
        password: password
    };

    // Send a POST request to the server with the user data
    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        })
    })
    
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Signup successful');
            window.location.href = '/login.html'; // Redirect to login page after signup
        } else {
            alert('Signup failed: ' + data.message); // Show error message from server
        }
    })
    .catch(error => {
        console.error('Signup failed:', error);
    });
});
