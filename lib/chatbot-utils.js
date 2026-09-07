/**
 * Sends a message to the Roofera chatbot iframe
 * @param {string} message - The message to send to the chatbot
 */
export const sendMessageToChatbot = (message) => {
    const iframe = document.getElementById("roofera-iframe");
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
            {
                type: "send-chatbot-message",
                message: message,
            },
            "*"
        );
        console.log("Message sent to chatbot:", message);
    } else {
        console.error("Chatbot iframe not found. Please wait for the chatbot to load.");
    }
};
