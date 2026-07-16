# UI design system

## Direction

The site uses one editorial portfolio language: a warm neutral canvas, clear rules, compact technical labels, and large display typography. The homepage should communicate Jhye's product-engineering positioning immediately, then lead into selected work and a direct contact path. Personality comes from the writing, portrait, and project choices rather than a simulated assistant interface.

## Tokens

- Homepage background: `#ffffff`
- Homepage ink: `#151515`
- Homepage muted text: `#66635d`
- Homepage rules: `#cec8bc`
- Homepage accent: `#bd342b`
- Editorial-page background: `#f1eee7`
- Dark callout: `#191817`

Use neutral colours for most of the interface and reserve red for emphasis, focus, and primary actions. Keep controls square-cornered and editorial rather than introducing rounded finder controls, gradients, green accents, glass effects, or decorative colour noise.

## Typography

- Editorial display: Space Grotesk
- Editorial body: DM Sans
- Technical labels: IBM Plex Mono

Display headlines use tight tracking and balanced line wrapping. Monospace text is limited to indexes, timestamps, categories, and short annotations.

## Layout and components

- Use whitespace and scale to create hierarchy on the homepage; use horizontal rules throughout the site.
- Homepage actions should be explicit links to Work, Capabilities, and Contact.
- Featured projects are image-and-copy records with case-study proof, not dashboard cards.
- Secondary work may use square-corner project cards with a single border.
- Buttons have square corners, a minimum 48px touch target, and visible keyboard focus.
- Responsive layouts collapse to one column without hiding essential navigation or capabilities.

## Accessibility

Every interactive element needs a visible focus state, meaningful accessible name, and sufficient touch size. Images need descriptive alternative text. Motion must respect `prefers-reduced-motion`. Keep page structure semantic and preserve the skip link in the root layout.
