
function sendMessage() {
    const userInput = document.getElementById("userInput");
    const messageText = userInput.value.trim();
 
    if (messageText === "") return;
 
    appendMessage("user", messageText, "sent");
 
    // Simulate a bot response
    setTimeout(() => {
        appendMessage("bot", "Thank you for your message. How can I assist you further?", "received");
    }, 1000);
 
    userInput.value = "";
}
 
function appendMessage(sender, text, status) {
    const chatBody = document.getElementById("chatBody");
 
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    // const bubbleElement = document.createElement("div");
    // bubbleElement.classList.add("bubble");

    const messageContent = document.createElement("div");
    messageContent.classList.add("message-content");
    messageContent.innerText = text;
 
    const timestampElement = document.createElement("div");
    timestampElement.classList.add("timestamp");
    timestampElement.innerText = `${getCurrentTime()}`;
 
    messageElement.appendChild(messageContent);
    messageElement.appendChild(document.createElement("br"));
    messageElement.appendChild(timestampElement);
    //   s
     chatBody.appendChild(messageElement);//

    
    // Scroll to the bottom
    chatBody.scrollTop = chatBody.scrollHeight;
}
 
function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
 
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
 
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}