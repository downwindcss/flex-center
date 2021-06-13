# downwindcss/flex-center

A Tailwind CSS component for centering flex content in the middle.  
Basically,

```css
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Installation

```bash
npm install @downwindcss/flex-center

# using Yarn
yarn add @downwindcss/flex-center

# with PNPM
pnpm install @downwindcss/flex-center
```

## Configuration

In your Tailwind CSS configuration file, `tailwindcss.config.js`,  
add the plugin after following the installation step above.

```json
module.exports = {
    // other configurations...
    plugins: [require('@downwindcss/flex-center')]
}
```

Only `responsive` variant is enabled by default.  
Same as `flex` utility: https://tailwindcss.com/docs/flex#variants

## Example