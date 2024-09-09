# Browser Extension - Image Brightness Reducer

This browser extension reduces the brightness of images on any webpage you visit. It allows users to control the brightness of images to make them easier on the eyes, especially during night browsing or in low-light environments.

## Features
- Automatically reduces the brightness of all images on a webpage.
- Adjustable brightness levels with a slider for precise control.
- Option to toggle the brightness adjustment on or off for individual images or entire webpages.
- Works across various websites without performance issues.
- Simple and clean UI for ease of use.

## Installation

 
## Usage

1. Click on the extension icon to open the brightness control panel.
2. Use the slider to adjust the brightness of images on the current webpage.
3. You can toggle the effect on or off using the "Enable/Disable" button.
4. The extension will remember the brightness settings for each tab.

## Development

### Folder Structure

```
.
├── manifest.json         # Extension configuration and permissions
├── background.js         # Handles background processes (e.g., applying brightness changes)
├── content.js            # Injects functionality into the webpage
├── popup.html            # UI for the extension popup
├── popup.css             # Styling for the extension popup
├── popup.js              # Handles the logic for the popup's UI
├── icons/                # Icon files for the extension
└── README.md             # This file
```

### manifest.json

The `manifest.json` file contains the basic configuration of the extension, such as permissions and resources.

### background.js

Handles background processes like updating the brightness settings and communicating between the extension popup and the webpage.

### content.js

This script is injected into the webpage, where it applies the brightness reduction to all images.

### popup.html, popup.css, popup.js

These files manage the extension's user interface, which includes the brightness control slider and toggle options.

## Contribution

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License.

---

### Future Enhancements

- Add support for different brightness presets.
- Apply brightness reduction selectively based on the time of day.
- Sync brightness settings across multiple devices.