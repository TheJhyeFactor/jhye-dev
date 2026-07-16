# UI design system

## Direction

The homepage uses an ultra-minimal interactive portfolio language: a white canvas, compact top chrome, a centred human introduction, and large navigational controls. It should feel immediate, personal, and intentionally quiet rather than like a marketing template. Canonical content pages retain the denser editorial system for long-form reading.

## Tokens

- Homepage background: `#ffffff`
- Homepage ink: `#171717`
- Homepage muted text: `#777777`
- Homepage rules: `#dfdfdf`
- Homepage accent: `#4e84e6`
- Editorial-page background: `#f1eee7`
- Dark callout: `#191817`

Use neutral colours for most of the interface and reserve blue for active navigation, focus, and primary contact. The rounded finder and navigation controls are specific to the interactive homepage; do not spread that shape language across the editorial pages. Do not introduce gradients, green accents, glass effects, or decorative colour noise.

## Typography

- Interactive homepage: system sans-serif stack
- Editorial display: Space Grotesk
- Editorial body: DM Sans
- Technical labels: IBM Plex Mono

Display headlines use tight tracking and balanced line wrapping. Monospace text is limited to indexes, timestamps, categories, and short annotations.

## Layout and components

- Use whitespace and scale to create hierarchy on the homepage; use horizontal rules on content pages.
- Homepage views must sync to URL hashes and remain usable with browser back/forward navigation.
- The section finder only routes to known local content and must never imply a general AI assistant.
- Project previews open in a native, keyboard-accessible dialog.
- Featured projects are image-and-copy records, not dashboard cards.
- Secondary work may use square-corner project cards with a single border.
- Buttons have square corners, a minimum 48px touch target, and visible keyboard focus.
- Responsive layouts collapse to one column without hiding essential content.

## Accessibility

Every interactive element needs a visible focus state, meaningful accessible name, and sufficient touch size. Images need descriptive alternative text. Motion must respect `prefers-reduced-motion`. Keep page structure semantic and preserve the skip link in the root layout.
