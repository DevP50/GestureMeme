//Listening for the message from popup.js
console.log("Content script loaded and listening for messages.");
//const showMessage= document.getElementById('message')
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received:", message);
    // When an event listener is added, 
    // it will be called with three arguments: request, sender, and sendResponse. 
    // The request argument contains the message sent from the popup.js script, 
    // the sender argument contains information about the sender of the message, 
    // and the sendResponse argument is a function that can be used to send a response back to the sender.
    
    if (message.action === "ENABLE_GESTUREMEME") {
          console.log("🔥 GestureMeme enabled!");
        // Handle the enabled message
        //showMessage.style.display = 'block'; // Show the message
    }
});