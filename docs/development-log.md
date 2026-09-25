# Day 1

## Goal
Create the basic Chrome extension structure.

## Built
- manifest.json
- popup.html
- popup.js
- content.js

## Problem
popup.js couldn't find enableButton.

## Investigation
The script was executing before the button existed.

## Fix
Moved popup.js below the HTML elements.

## Lesson
JavaScript execution order matters when interacting
with the DOM.

# Day 2

## Goal
Connect popup.js to content.js.

## Problem
"Receiving end does not exist."

## Investigation
The content script was loading, but its message
listener wasn't correctly registered.

## Fix
Used chrome.runtime.onMessage.addListener().

## Result
content.js successfully received the message.

## Lesson
The popup and content script are separate environments.
Chrome messaging provides the communication channel.

# Day 3

## Goal

Understand the webcam API (MediaDevices API) and display myself on a webpage to prove that the webcam concept works.

## Problem

I first tried to display the webcam video feed inside `popup.html` by requesting access to the webcam. However, the request repeatedly resulted in:

`NotAllowedError: Permission dismissed`

At first, I suspected that the webcam permission or the code itself was the problem.

## Investigation

I tried isolating the problem by creating a separate `camera-test.html` file containing the webcam logic and opening it directly from the file explorer.

The browser allowed me to grant camera permission, but the video feed still did not work. The console showed an error related to the `file://` environment.

This suggested that the environment in which the page was running was affecting how the browser handled the webcam API.

## Fix

I started a local HTTP server using:

`python -m http.server 8000`

I then accessed `camera-test.html` through:

`http://localhost:8000/camera-test.html`

The webcam feed worked successfully, and I was able to see myself on the page.

## Result

The HTML page successfully accessed the webcam and displayed the live video feed.

This confirmed that the webcam hardware, `getUserMedia()`, and the basic video-stream code were working.

## Lesson

The problem was not simply the webcam or the underlying camera code. The **execution environment and browser context** also mattered.

The `file://` environment has different security behavior from a normal HTTP origin such as `localhost`.

I also learned that the Chrome extension popup is a different execution context from the YouTube page, which is important when designing how GestureMeme's camera, popup, and `content.js` will communicate.

## End of Day 3

The webcam concept has been successfully proven outside the extension popup.

Next: figure out the proper extension context for the webcam, then move toward processing the video frames for gesture recognition.
