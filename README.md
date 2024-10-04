# QuickFlip

QuickFlip is a Chrome extension that enhances web page navigation by adding convenient navigation buttons and keyboard shortcuts.

## Features

- Adds a "Next" page icon to the bottom right corner of web pages
- Adds a "Previous" page icon to the bottom left corner of web pages
- Supports keyboard arrow key control for quick navigation
- Multilingual support (English, Simplified Chinese, Traditional Chinese)

## Project Structure

```
.
├── manifest.json
├── content.js
├── styles.css
└── _locales
    ├── en
    │   └── messages.json
    ├── zh_CN
    │   └── messages.json
    └── zh_TW
        └── messages.json
```

- `manifest.json`: Contains the extension's configuration and permissions
- `content.js`: Implements the main functionality of the extension
- `styles.css`: Defines the styles for the navigation buttons
- `_locales/`: Contains localization files for different languages

## Installation

1. Clone this repository or download the source code
2. Open Google Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files

## Usage

Once installed, the QuickFlip extension will automatically add navigation buttons to web pages. You can:

- Click the "Next" button in the bottom right corner to go to the next page
- Click the "Previous" button in the bottom left corner to go to the previous page
- Use the right arrow key on your keyboard to navigate to the next page
- Use the left arrow key on your keyboard to navigate to the previous page

## Supported Languages

- English
- Simplified Chinese (简体中文)
- Traditional Chinese (繁體中文)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).