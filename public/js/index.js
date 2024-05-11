// index.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the username from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    // Display the username in the navigation bar
    const usernameDisplay = document.getElementById('username-display');
    if (usernameDisplay && username) {
        usernameDisplay.textContent = `Welcome, ${username}`;
    }

});