# GestureMeme

GestureMeme is a Chrome extension that connects webcam
gesture recognition with fun reactions on YouTube.

## Current status

Day 1:
- Chrome extension created
- Popup created
- Content script injected into YouTube

Day 2:
- Popup → content script messaging working
- First message successfully received by YouTube

Day 3:
-Webcam permission blocker fixed
-Imaged successfuly displayed on a webpage(camera.html)
-Moved the camera feature from temporary popup.html to a persistent camera.html file

## Architecture

Webcam
  ↓
Gesture recognition
  ↓
Chrome messaging
  ↓
Content script
  ↓
YouTube reaction

## Planned MVP

1. Webcam access
2. Detect one gesture
3. Send gesture event
4. Trigger one GIF