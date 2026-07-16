# UI design system

## Direction

The site uses an Apple-style interactive homepage: a quiet white canvas, centered portrait, oversized name watermark behind the bottom controls, and a persistent five-section menu. The internal Work, About, Capabilities, and Contact routes retain the editorial reading system. The homepage should communicate Jhye's product-engineering positioning immediately while making exploration feel tactile and personal.

## Tokens

- Homepage background: `#ffffff`
- Homepage ink: `#151515`
- Homepage muted text: `#66635d`
- Homepage rules: `#cec8bc`
- Homepage accent: `#bd342b`
- Editorial-page background: `#f1eee7`
- Dark callout: `#191817`

Use neutral colours for most of the interface and reserve blue for active navigation and focus. The homepage may use soft cursor-responsive colour fields and rounded controls as part of its Apple-style interaction language. Keep the effect subtle and avoid neon gradients, green success-heavy themes, glass effects, or decorative colour noise.

## Typography

- Editorial display: Space Grotesk
- Editorial body: DM Sans
- Technical labels: IBM Plex Mono

Display headlines use tight tracking and balanced line wrapping. Monospace text is limited to indexes, timestamps, categories, and short annotations.

## Layout and components

- Use whitespace and scale to create hierarchy on the homepage; use horizontal rules throughout the internal pages.
- The homepage bottom menu is the primary navigation for Me, Projects, Skills, Curious, and Contact.
- The section finder routes only to known portfolio content and must not imply a general AI assistant.
- Featured projects are image-and-copy records with case-study proof, not dashboard cards.
- Secondary work may use square-corner project cards with a single border.
- Buttons have square corners, a minimum 48px touch target, and visible keyboard focus.
- Responsive layouts collapse to one column without hiding essential navigation or capabilities.

## Accessibility

Every interactive element needs a visible focus state, meaningful accessible name, and sufficient touch size. Images need descriptive alternative text. Motion must respect `prefers-reduced-motion`. Keep page structure semantic and preserve the skip link in the root layout.
