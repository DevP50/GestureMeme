const enableButton = document.getElementById('enableButton')
const camera = document.getElementById('camera')
enableButton.addEventListener('click', function() {
    //Building the Chrome Messaging system to send a message to the content script on an active youtube tab
   /* const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });//Looking for the active youtube tab

    if (!tab){
        return;
    }
    
    try {
        //2. Send a message to the content script running on that tab
        const response = await chrome.tabs.sendMessage(tab.id, {action: "ENABLE_GESTUREMEME",payload: "Gesture Meme Enabled"})
    } catch (error) {
    console.error("Error sending message: ", error);
  }*/
async function getCameraStream(){
 try{
  const MediaStreamVideo = await navigator.mediaDevices.getUserMedia({video: true})//Await for the getUserMedia promise to be resolved before using
  camera.srcObject = MediaStreamVideo;
 }catch(error){
    console.error("Camera Error:",error.name, error.message);
 }
}
getCameraStream()
 
})