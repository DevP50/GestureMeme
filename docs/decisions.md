# Architecture Decisions

## Why content.js?
It runs in the context of the YouTube page and can
interact with the page's DOM.

## Why messaging?
The popup and content script run in different contexts,
so they need a communication mechanism.

## Why start with one gesture?
The MVP should prove the complete pipeline before adding
more gestures and features.