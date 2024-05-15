document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const suggestedQuestions = document.querySelectorAll('.suggested-question');

    let isOrderConfirmed = false;

    // Function to add a message to the chat container
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        // Scroll to the bottom of the chat container
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to simulate bot response
    function getBotResponse(message) {
        // Example of automatic responses based on user input
        switch (message.toLowerCase()) {
            case 'hello':
                return { message: 'Hi there! Would you like to confirm the exchange?', action: 'confirm-exchange' };
            case 'yes':
                if (isOrderConfirmed) {
                    return { message: 'Your exchange has already been confirmed.', action: null };
                } else {
                    return { message: 'Exchange confirmed. Thank you!', action: 'confirm-exchange' };
                }
            case 'no':
                return { message: 'Exchange not confirmed.', action: null };
            case 'negotiate':
                return { message: 'Sure! What is your offer for this product?', action: 'negotiate-offer' };
            case 'how can i place an exchange?':
                return { message: "To place an exchange, please select an option: You can choose to exchange through the app or in person. Please type 'in app' or 'in person' to proceed with your preferred option.", action: null };
            case 'what exchange methods you would accept?':
                return { message: 'We accept in app and in person.', action: null };
            case 'confirm':
                return { message: 'Confirming exchange...', action: 'confirm-order' }; // Note: Changed action to 'confirm-order'
            case 'through app':
                return { message: 'Type confirm to place the exchange through app.', action: null };
            case 'in person':
                return { message: 'Type confirm to place exchange in person.', action: null };
            default:
                return { message: 'I did not understand that.', action: null };
        }
    }

    // Function to handle user input
  
    function handleUserInput(input) {
        const botResponse = getBotResponse(input);
        addMessage(input, 'user');
        if (botResponse.action === 'confirm-order') {
            isOrderConfirmed = true;
        }
        if (botResponse.action === 'place-exchange') {
            // Display buttons for In App and In Person options
            addSuggestedButtons(['In App', 'In Person']);
        }
        if (input.toLowerCase() === 'in app' && botResponse.action === null) {
            addMessage('Type confirm to place the exchange through app.', 'bot');
        } else if (input.toLowerCase() === 'in person' && botResponse.action === null) {
            addMessage('Type confirm to place exchange in person.', 'bot');
        } else {
            addMessage(botResponse.message, 'bot'); // Display the bot response
        }
    }




    // Event listener for send button click
    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message !== '') {
            handleUserInput(message);
            messageInput.value = '';
        }
    });

    // Event listener for Enter key press in the message input field
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const message = messageInput.value.trim();
            if (message !== '') {
                handleUserInput(message);
                messageInput.value = '';
            }
        }
    });

    // Event listener for suggested questions
    suggestedQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const message = question.textContent;
            handleUserInput(message);
        });
    });

    // Initial message from the bot
    addMessage('Hi! How can I assist you?', 'bot');
});
