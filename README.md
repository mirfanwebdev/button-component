# Frontend Coding Test: Button Component

This is button component with dynamic background, size, icon and tooltip.

## Installation

This project is built with Typescript, TailwindCSS, React Icon and Vite. Installation can be done with cloning this repo and install with npm

```bash
git clone
npm install
npm run dev
```

## Parameter option

This button component can have various option for each parameter

```ts
type IconPosition = "left" | "right";
type TooltipPosition = "top" | "bottom" | "left" | "right";
type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "primary" | "secondary" | "danger";
```

## Implementation

Implementing the dynamic style option can be done as component props

```ts
<Button
  label="" // button label
  onClick={handleCLick} // button onCLick handler
  backgroundColor="primary" // button color
  size="small" // button size
  icon=<IoIcon /> // icon
  iconPosition="right" // icon position
  tooltip="" // tooltip
  tooltipPosition="top" // tooltip position
/>
```
