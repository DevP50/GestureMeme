## GestureMeme Architecture

             ┌──────────────┐
             │   Webcam     │
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │    OpenCV    │
             │ capture/frame│
             │ processing   │
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │   Gesture    │
             │ Recognition  │
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │ Gesture event│
             │e.g. 👍 Action: (THUMBS_UP)│
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │ Chrome       │
             │ messaging    │
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │ content.js   │
             │YouTube        
                displays    │
             └──────┬───────┘
                    ↓
                🎬 GIF