# Errors Encountered During Day 3

### 1. Trying to show the webcam feed in `popup.html`

First, we tried displaying the webcam feed directly inside `popup.html`, which was already connected to `popup.js`.

The JavaScript used `getUserMedia()` to request access to the webcam, but the request immediately failed with:

`popup.js:22 Camera Error: NotAllowedError: Permission dismissed`

At first, it looked like the browser or webcam permission was the problem. However, changing the camera permission for YouTube did not fix the issue.

### 2. Testing the camera with a local `file://` page

To isolate the problem, I created a separate `camera-test.html` file containing the video element and the `getUserMedia()` code.

I opened the file directly from the file explorer. The browser asked for camera permission, and I allowed it, but the webcam feed still did not appear.

The console showed an error related to the `file://` environment:

`Unsafe attempt to load URL file://...`

This helped identify that the problem was not necessarily the webcam itself. The page was being run from a `file://` origin, which has different security restrictions from a normal web page.

### 3. Testing with a local HTTP server

To test the same camera code in a proper HTTP environment, I started a local Python server from the GestureMeme directory:

`python -m http.server 8000`

Then I opened:

`http://localhost:8000/camera-test.html`

This time, the webcam feed worked. I could see myself on the video.

### Result

This was an important breakthrough because it proved that:

* The webcam hardware works.
* Chrome can access the webcam.
* `getUserMedia()` works.
* The `MediaStream` can be displayed in a `<video>` element.
* The problem was specific to the environment/context in which the extension was requesting camera access.

## Lesson Learned

The problem was not simply "the camera code is broken."

The **execution context and security environment matter** when working with browser APIs such as `getUserMedia()`.

I also learned that testing the same piece of functionality in a simpler environment can help isolate where a bug actually comes from.

Instead of immediately changing lots of code, I isolated the components:

**Extension popup → file:// page → localhost HTTP page**

The localhost test showed that the underlying webcam functionality works, which narrowed the problem down to the Chrome extension environment rather than the camera itself.
