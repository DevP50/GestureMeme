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