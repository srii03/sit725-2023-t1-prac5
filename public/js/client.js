// Connect to Socket.io server
const socket = io();

// Function to display a message
const displayMessage = (data) => {
    // Create a message element
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = data;
    document.getElementById('messageDisplay').appendChild(messageDiv);
    
    // Scroll to bottom of message display area
    document.getElementById('messageDisplay').scrollTop = document.getElementById('messageDisplay').scrollHeight;

    // Remove the message after a delay
    setTimeout(() => {
        messageDiv.classList.add('slide-out'); // Add slide-out animation class
        setTimeout(() => {
            messageDiv.remove(); // Remove the message after the animation completes
        }, 1000); // Adjust the duration as needed
    }, 5000); // Message stays for 5 seconds (adjust as needed)
};

// Handle 'message' event from server
socket.on('message', (data) => {
    displayMessage(data);
});
