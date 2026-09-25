const enableCamera = document.getElementById('enableCamera')
const camera = document.getElementById('camera')

enableCamera.addEventListener('click', function(){

  try{
      async function getCamera(){
         const mediaDevicesVideo = await navigator.mediaDevices.getUserMedia({
            video : true,
            audio : false
         })
        camera.srcObject = mediaDevicesVideo//Connecting the mediaStream object to the video using srcObject
        }
        getCamera()//We are changing the position of getCamera() to be inside the try block so that if there is an error, 
        //it will be caught by the catch block whereas if its otherside the catch block it defeats the purpose of the try catch block

      
    }catch(error){
        console.error("Camera error: ",error.name)
    }
    
})