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