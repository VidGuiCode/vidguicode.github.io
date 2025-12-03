# VidGuiCode Portfolio Design Language

> A comprehensive guide to the visual identity, components, and design principles used throughout the portfolio.

---

## 1. Design Philosophy

### Core Concept: "Server Rack Aesthetic"
The design draws inspiration from **data center server racks** and **cloud infrastructure**, creating a professional, technical aesthetic that reflects expertise in IT and cloud computing.

### Key Principles
- **Squared & Structured** — Primary shapes are rectangular/squared, mimicking server rack units (1U, 2U)
- **Subtle Roundness** — Small border-radius (4-8px) on interactive elements to break rigidity
- **Grid-Based Layout** — 4-column grid system inspired by rack mounting patterns
- **Functional Minimalism** — Clean, no-clutter design with purposeful whitespace
- **Status Indicators** — LED-style indicators for visual feedback (green = active, blue = info, amber = warning)

---

## 2. Color System

### Light Mode — "Soft Silver" Palette
```css
--bg-primary: #f0f0f2;      /* Light gray background */
--bg-secondary: #e4e4e7;    /* Darker gray for badges/hover */
--text-primary: #18181b;    /* Soft black */
--text-secondary: #52525b;  /* Dark gray */
--border-color: #d4d4d8;    /* Subtle border definition */
--card-bg: #fafafa;         /* Off-white cards */
--grid-color: rgba(0, 0, 0, 0.07);
```

### Dark Mode — "Server Room" Palette
```css
--bg-primary: #0a0a0c;      /* Deep black, server room floor */
--bg-secondary: #18181b;    /* Elevated surfaces */
--text-primary: #e4e4e7;    /* Light gray text */
--text-secondary: #a1a1aa;  /* Muted text */
--border-color: #27272a;    /* Subtle dark borders */
--card-bg: #131315;         /* Card background */
--grid-color: rgba(255, 255, 255, 0.03);
```

### Status LED Colors
```css
--led-green: #22c55e;   /* Active/Online status */
--led-blue: #3b82f6;    /* Information/Highlight */
--led-amber: #f59e0b;   /* Warning/In Progress */
```

### Certification Level Colors
| Level        | Color     | Hex       | Usage                    |
|--------------|-----------|-----------|--------------------------|
| Specialty    | Purple    | `#9333ea` | Deep technical expertise |
| Expert       | Red       | `#dc2626` | Advanced professional    |
| Associate    | Blue      | `#2563eb` | Job-role based           |
| Fundamentals | Green     | `#059669` | Entry-level              |

---

## 3. Typography

### Font Stack
```css
/* Headings */
font-family: 'Space Grotesk', sans-serif;
font-weight: 600;
letter-spacing: -0.02em;

/* Body Text */
font-family: 'Inter', sans-serif;
line-height: 1.6;

/* Monospace (Tags, Dates, Code) */
font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Menlo', 'Courier New', monospace;
letter-spacing: -0.02em;
```

### Type Scale
| Element    | Size     | Weight | Usage                |
|------------|----------|--------|----------------------|
| H1         | 3.5rem   | 600    | Hero title           |
| H2         | 2rem     | 600    | Section headers      |
| H3         | 1.25rem  | 600    | Card titles          |
| H4         | 1rem     | 400    | Subtitles            |
| Body       | 1rem     | 400    | Paragraph text       |
| Small      | 0.875rem | 400    | Captions, metadata   |
| Badge      | 0.75rem  | 600    | Status badges        |

---

## 4. Spacing System

### Base Unit: 0.25rem (4px)
```
0.25rem  = 4px   (xs)
0.5rem   = 8px   (sm)
0.75rem  = 12px  (md)
1rem     = 16px  (base)
1.5rem   = 24px  (lg)
2rem     = 32px  (xl)
3rem     = 48px  (2xl)
5rem     = 80px  (section gaps)
```

### Container
- Max width: `1200px`
- Padding: `2rem`
- Centered with `margin: 0 auto`

---

## 5. Grid System

### 4-Column Bento Grid
```css
.section-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
}
```

### Card Spanning
| Component        | Span    | Description                |
|------------------|---------|----------------------------|
| Hero Text        | 2 cols  | Main introduction          |
| Hero Image       | 2 cols  | Profile photo              |
| Stat Box         | 1 col   | Single metric              |
| Project Card     | 2 cols  | Project showcase           |
| Experience Card  | 4 cols  | Full-width timeline entry  |
| Skill Category   | 1 col   | Skill group                |
| Cert Card        | 2 cols  | Certification badge        |

---

## 6. Components

### Cards
```css
.card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    /* NO border-radius — squared design */
}
```

**Hover State:**
- Subtle lift: `transform: translateY(-2px)`
- Border highlight: `border-color: var(--text-secondary)`

### Buttons
```css
.btn {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    border: 1px solid var(--text-primary);
    font-family: 'Space Grotesk', sans-serif;
    /* Squared corners */
}

.btn.primary {
    background: var(--text-primary);
    color: var(--bg-primary);
}

.btn.secondary {
    background: transparent;
    color: var(--text-primary);
}
```

### Badges
```css
.badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    font-size: 0.75rem;
    font-weight: 600;
}
```

**Status LED:**
- 8px circle with `border-radius: 50%`
- Glow effect: `box-shadow: 0 0 8px rgba(color, 0.4)`
- Pulse animation for active states

### Icon Buttons
```css
.icon-btn {
    background: none;
    border: 1px solid var(--border-color);
    padding: 0.5rem;
    /* Squared */
}
```

---

## 7. Border Radius Rules

### Primary Rule: Squared (0px)
Most elements use **no border-radius** to maintain the server rack aesthetic:
- Cards
- Buttons
- Input fields
- Containers

### Exception: Subtle Roundness (4-8px)
Small radius applied to break visual monotony on:
- Badge images: `border-radius: 8px`
- Logo images: `border-radius: 6-8px`
- Dropdown menus: `border-radius: 0` (squared)
- Flag icons: `border-radius: 2px`

### Full Round (50%)
Reserved for status indicators only:
- LED status dots: `border-radius: 50%`
- Profile image containers (optional)

---

## 8. Animations & Motion

### Entry Animation — "Fade Up"
```css
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.card.powered-on {
    animation: fadeUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
```

### Status Pulse — "Breathing Light"
```css
@keyframes pulseBreath {
    0% { opacity: 0.4; transform: scale(0.95); }
    50% { opacity: 1; transform: scale(1); }
    100% { opacity: 0.4; transform: scale(0.95); }
}
```

### Hover Transitions
- Duration: `0.2s`
- Easing: `ease` or `cubic-bezier(0.2, 0.8, 0.2, 1)`
- Properties: `transform`, `border-color`, `background`, `color`

---

## 9. Background Elements

### Grid Pattern
```css
.grid-background {
    background-image: 
        linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
        linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
    background-size: 40px 40px;
}
```

### Rack Rail (Deprecated)
Originally included metal texture patterns, now simplified for cleaner look.

---

## 10. Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 768px) { ... }

/* Tablet (if needed) */
@media (max-width: 1024px) { ... }
```

### Mobile Adaptations
- Grid collapses to single column
- Cards stack vertically
- Navigation becomes hamburger menu
- Font sizes reduce proportionally
- Padding reduces to `1rem`
- Date highlights use `--led-blue` for scanning

### Experience Cards (Mobile)
```css
.experience-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.experience-card .exp-date span {
    color: var(--led-blue); /* Highlight for scanning */
}
```

---

## 11. Iconography

### Icon Library: Lucide Icons
- Size: `20-24px` for inline, `48px` for feature icons
- Color: `var(--text-secondary)` default, `var(--text-primary)` on hover
- Stroke width: Default (2px)

### Status Indicators
- **Green LED** — Active, online, completed
- **Blue LED** — Information, current, in progress
- **Amber LED** — Warning, pending, attention needed

---

## 12. Image Treatment

### Profile Images
- Full color (no grayscale filter)
- `object-fit: cover`
- Subtle zoom on hover: `transform: scale(1.02)`

### Logo Images
- WebP format for optimization
- `object-fit: contain`
- Border radius: `6-8px`
- Consistent sizing within containers

### Certification Badges
- WebP format
- Square container with rounded corners
- `object-fit: contain`
- Max size: `48px` in compact views

---

## 13. Accessibility

### Color Contrast
- Text on backgrounds meets WCAG AA standards
- Interactive elements have visible focus states
- Status colors have sufficient contrast

### Focus States
```css
:focus-visible {
    outline: 2px solid var(--led-blue);
    outline-offset: 2px;
}
```

### Motion
- Respects `prefers-reduced-motion`
- Animations are subtle and purposeful

---

## 14. Dark/Light Mode

### Toggle Behavior
- Smooth transition: `transition: background-color 0.3s, color 0.3s`
- Icon swap: Sun (dark mode) / Moon (light mode)
- Persisted via `data-theme` attribute on `<html>`

### Variable Inheritance
All colors use CSS custom properties, enabling seamless theme switching without component-level overrides.

---

## 15. File Naming Conventions

### Images
```
badge-{provider}-{certification}.webp
logo-{organization}.webp
profile-{variant}.webp
```

### CSS Classes
```
.section-{name}     — Section containers
.{component}-card   — Card variants
.{component}-icon   — Icon containers
.{state}-{element}  — State modifiers
```

---

## Summary

| Aspect          | Decision                                    |
|-----------------|---------------------------------------------|
| Shape Language  | Squared primary, subtle rounds on accents   |
| Color Palette   | Neutral grays + LED accent colors           |
| Typography      | Space Grotesk headings, Inter body          |
| Grid            | 4-column bento layout                       |
| Motion          | Subtle fade-up, breathing pulse             |
| Icons           | Lucide, 20-24px, secondary color            |
| Responsiveness  | Mobile-first, single column on small screens|
| Theme           | Light/Dark with CSS variables               |

---

*Last updated: December 2025*
