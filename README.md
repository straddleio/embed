# Straddle Embed

This repository contains the necessary components and scripts for embedding Straddle's onboarding form into your application. It provides multiple implementation options to suit different use cases.

## Directory Structure

```
straddle/embed/
│
├── src/
│   ├── single-page.html
│   └── StraddleEmbedComponent.tsx
│
├── README.md
└── package.json
```

## File Descriptions

### src/single-page.html

This file demonstrates a complete single-page implementation of the Straddle embed, including both the iframe and the initialization script. Copy the contents of this file and adapt it to your needs.

### src/StraddleEmbedComponent.tsx

This is a React component for the Straddle embed, allowing easy integration into React applications.

```tsx
import EmbedComponent from 'path/to/StraddleEmbedComponent'

function App() {
    return (
        <div>
            <h1>My App</h1>
            <EmbedComponent platformId="your-platform-id" env="sandbox" />
        </div>
    )
}
```

## Implementation Options

### Standard Implementation

For most use cases, use the standard implementation by copying the contents of `singlepage.html` into your application.

### React Implementation

For React applications, import and use the `StraddleEmbedComponent` as shown in the usage example above.

## Important Note`

Before implementing, replace all instances of `{platform_id}` with your actual Straddle platform ID. You can find this in the Straddle Dashboard under Settings > Company Profile.

## Support

For additional assistance or to report issues, please contact Straddle support or open an issue in this repository.
