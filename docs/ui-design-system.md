# UI design system

## Direction

The portfolio uses an editorial build-record language: warm paper, near-black typography, thin rules, technical annotations, and a restrained vermillion accent. It should feel like a product designer and engineer's working record, not a generic software dashboard.

## Tokens

- Background: `#f1eee7`
- Surface: `#f8f6f1`
- Ink: `#151515`
- Muted text: `#66635d`
- Rules: `#cec8bc`
- Accent: `#bd342b`
- Dark callout: `#191817`

Use neutral colours for most of the interface and reserve red for orientation, interaction, and emphasis. Do not introduce gradients, green accents, glass effects, decorative pills, or soft floating cards.

## Typography

- Display: Space Grotesk
- Body: DM Sans
- Technical labels: IBM Plex Mono

Display headlines use tight tracking and balanced line wrapping. Monospace text is limited to indexes, timestamps, categories, and short annotations.

## Layout and components

- Use horizontal rules and whitespace to create hierarchy.
- Featured projects are image-and-copy records, not dashboard cards.
- Secondary work may use square-corner project cards with a single border.
- Buttons have square corners, a minimum 48px touch target, and visible keyboard focus.
- Responsive layouts collapse to one column without hiding essential content.

## Accessibility

Every interactive element needs a visible focus state, meaningful accessible name, and sufficient touch size. Images need descriptive alternative text. Motion must respect `prefers-reduced-motion`. Keep page structure semantic and preserve the skip link in the root layout.
