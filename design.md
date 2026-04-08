````markdown
# Design System Strategy: The Curated Heirloom

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Curated Heirloom."**

Unlike standard "startup-chic" interfaces that feel disposable and fast-paced, this system is built to feel like a high-end, physical lifestyle journal. It celebrates the tactile nature of a personalized coloring book—bridging the gap between digital customization and physical memory-keeping.

To achieve this, we move beyond the "template" look by utilizing **intentional asymmetry** (e.g., staggering images in a gallery), **layered tonal depth**, and a **Soft Editorial** layout. We prioritize "breathing room" (whitespace) over information density, ensuring every element feels intentional, calm, and trustworthy.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule

The palette is rooted in organic, earthy tones that evoke warmth and nostalgia. We avoid the clinical sterility of pure white backgrounds in favor of rich, creamy neutrals.

### Color Token Mapping

- **Primary Background:** `surface` (#FFF9EF) / `surface-container-low` (#F9F3EA)

- **Sectioning:** `surface-container` (#F3EDE4) to `surface-container-highest` (#E7E2D9)

- **Primary Action:** `primary` (#984446) / `primary-container` (#F28C8C)

- **Emotional Accents:** `tertiary` (#3D6751) for growth/nature; `secondary-container` (#FCC890) for playfulness.

### The "No-Line" Rule

**Explicit Instruction:** Do not use 1px solid borders for sectioning or card containment. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` card should sit on a `surface` background. If you need more definition, use a tonal transition, never a hard line.

### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers—like stacked sheets of fine watercolor paper.

- **Level 0 (Base):** `surface` (#FFF9EF)

- **Level 1 (Section):** `surface-container-low` (#F9F3EA)

- **Level 2 (In-Section Component):** `surface-container` (#F3EDE4)

### Signature Textures & Glassmorphism

To avoid a "flat" digital feel, use **Glassmorphism** for floating navigation bars or modal overlays.

- **Formula:** `surface` color at 80% opacity with a 20px `backdrop-blur`.

- **CTA Soul:** For primary buttons, use a subtle radial gradient from `primary` (#984446) at the center to `primary-container` (#F28C8C) at the edges. This adds "visual soul" and a soft glow that flat colors lack.

---

## 3. Typography: Editorial Authority

The typography pairing balances the friendly, approachable nature of childhood with the premium authority of a boutique brand.

- **Headings (Poppins):** The "Display" and "Headline" scales use Poppins. It is rounded and friendly but carries a geometric weight that feels modern. Use `display-lg` (3.5rem) for hero moments with tight tracking (-2%) to create an editorial impact.

- **Body (Inter):** All "Body," "Title," and "Label" scales use Inter. It provides high legibility for customization steps. Maintain a generous line-height (1.6 for body text) to ensure the interface feels "calm."

**Hierarchy Note:** Use `on-surface-variant` (#544242) for sub-captions and secondary information to maintain a soft contrast that doesn't overwhelm the eye.

---

## 4. Elevation & Depth: Tonal Layering

We reject traditional high-contrast shadows. Depth is achieved through "Stacking" and "Ambient Light."

### The Layering Principle

Place a `surface-container-lowest` card on a `surface-container` background to create a "lifted" effect. This is more sophisticated than a drop shadow.

### Ambient Shadows

When an element must float (e.g., a "Add to Cart" sticky bar), use a tinted shadow:

- **Color:** `on-surface` (#1D1B16) at 4%–6% opacity.

- **Blur:** 40px–60px (Extra-diffused).

- **Spread:** -5px (To keep the shadow tucked under the element).

### The Ghost Border Fallback

If accessibility requires a border (e.g., an input field), use a **Ghost Border**:

- **Token:** `outline-variant` (#DAC1C0) at 15% opacity. It should be felt, not seen.

---

## 5. Components: Softness & Intent

### Buttons

- **Radius:** `full` (pill-shaped) or `xl` (3rem).

- **Primary:** `primary-container` background with `on-primary-container` text.

- **Interaction:** On hover, shift background to `primary`.

### Cards & Lists

- **Rule:** Forbid divider lines. Separate list items using `1.5rem` (md) vertical whitespace or alternating backgrounds between `surface` and `surface-container-low`.

- **Radius:** Always `lg` (2rem) or `xl` (3rem) to maintain the "soft" brand identity.

### Input Fields

- Avoid the traditional "box." Use a `surface-container-highest` background with a `full` corner radius. The label should sit above the field in `label-md` uppercase for an editorial look.

### Unique Component: "The Keepsake Preview"

A specialized card for viewing coloring book pages. Use a `surface-container-lowest` card with a `sm` ambient shadow. The image should have a `md` (1.5rem) corner radius, nested inside the card’s `lg` (2rem) radius.

---

## 6. Do’s and Don’ts

### Do:

- **Embrace Asymmetry:** Stagger image/text blocks in a 40/60 ratio rather than a perfect 50/50 split.

- **Use Tonal Shifts:** Define sections by changing background colors from `surface` to `surface-container`.

- **Prioritize the "Gaze":** Use photography of families in soft, natural lighting.

### Don’t:

- **No "Startup" Blues:** Never use high-vibrancy blues or neon accents.

- **No Hard Lines:** Never use `100%` opaque borders or dividers.

- **No Tight Packing:** Avoid cramming information. If a section feels "busy," add `2rem` of padding.

- **No Standard Gradients:** Avoid "Techy" linear gradients. Only use subtle, tonal glows to add depth.

---

**Director’s Final Note:** This system is a hug, not a handshake. Every interaction should feel soft, intentional, and premium. When in doubt, add more whitespace and soften the corners.```
````
