# Straddle Embed

This repository contains the necessary components and scripts for embedding Straddle's onboarding form into your application. It provides multiple implementation options to suit different use cases.

## Directory Structure

```
straddle/embed/
│
├── src/
│   ├── auto-load.js
│   ├── event-load.js
│   ├── iframe.html
│   ├── script.js
│   ├── singlepage.html
│   └── EmbedComponent.tsx
│
├── README.md
└── package.json
```

## File Descriptions

### src/auto-load.js

This script automatically loads the Straddle embed when the DOM content is loaded.

```html
<script src="path/to/auto-load.js"></script>
```

### src/event-load.js

This script loads the Straddle embed on a specific user interaction, such as a button click.

```html
<button id="loadEmbedButton">Load Embed</button>
<script src="path/to/event-load.js"></script>
```

### src/iframe.html

This file contains the HTML for the Straddle embed iframe.

```html
<!-- Copy the iframe code from this file and paste it where you want the embed to appear -->
```

### src/script.js

This is the main initialization script for the Straddle embed. It defines the `loadEmbeds` function on the `window.Straddle` object.

```html
<script src="path/to/script.js"></script>
```

### src/singlepage.html

This file demonstrates a complete single-page implementation of the Straddle embed, including both the iframe and the initialization script. Copy the contents of this file and adapt it to your needs.

### src/EmbedComponent.tsx

This is a React component for the Straddle embed, allowing easy integration into React applications.

```tsx
import EmbedComponent from 'path/to/EmbedComponent';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <EmbedComponent platformId="your-platform-id" />
    </div>
  );
}
```

## Implementation Options

### Standard Implementation

For most use cases, use the standard implementation by copying the contents of `singlepage.html` into your application.

### Dynamic Loading

For more control over when the embed loads:

1. Include `script.js` in your HTML
2. Add the iframe from `iframe.html` where you want the embed to appear
3. Use either `auto-load.js` or `event-load.js` to trigger the embed loading

### React Implementation

For React applications, import and use the `EmbedComponent` as shown in the usage example above.

## Important Note

Before implementing, replace all instances of `{platform_id}` with your actual Straddle platform ID. You can find this in the Straddle Dashboard under Settings > Company Profile.

## Support

For additional assistance or to report issues, please contact Straddle support or open an issue in this repository.
