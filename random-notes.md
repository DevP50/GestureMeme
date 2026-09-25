## var navigator: Navigator

The Window.navigator read-only property returns a reference to the Navigator object, which has methods and properties about the application running the script.

# MDN Reference

## (method) MediaDevices.getUserMedia(constraints?: MediaStreamConstraints | undefined): Promise<MediaStream>

The getUserMedia() method of the MediaDevices interface prompts the user for permission to use a media input which produces a MediaStream with tracks containing the requested types of media.

MDN Reference

## Errors popup.js:20 Uncaught (in promise) NotAllowedError: Permission dismissed
We got this error because when we made the popup.js make the request to the youtube browser to use the user webcam It rejected it.

##
Since we loaded the camera-test.html file from the file explorer the browser treat them as unique security origins  and that can interfere with APIs like getUserMedia thats why the prompt shows but not  the feed because the getUserMedia() request never fully goes through 

## Errors encountered During Day 3
-First we tryed showing the video feed on the popup.html which has connected to the popup script but It didn't work I kept getting this error `popup.js:22 Camera Error: NotAllowedError Permission dismissed` so the js script was requesting permission to use the Youtube  webcam on the browser and it blocked it soo..

-I tried creating a new file that would contain the html video feed and the `getUserMedia()` method in one file and loaded the file from the file explorer,I asked for camera permission which I accepted but still didn't work because the file:// environment was the problem.THe browser treat files like this as unique security origins so the feed didn't show even though the camera prompt did

-Then finally,I ask Chatgpt and he suggested that I try a different environment that is the http environment 
-SO I loaded the http server `python -m http.server 8000` and accessed  the page at `localhost:8000/camera-test.html` and it worked!

## Lesson Learnt 
The code or the camera where the problem but instead the context of the content script and the environment the file is run all played a part 