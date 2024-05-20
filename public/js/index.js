document.addEventListener('DOMContentLoaded', function() {
    const usernameDisplay = document.getElementById('username-display');
    const username = localStorage.getItem('username'); // Retrieve the username from localStorage

    if (username) {
        usernameDisplay.innerHTML = '<i class="fas fa-user"></i> Welcome, ' + username;
    }
});
