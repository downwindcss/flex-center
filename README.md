# downwindcss/flex-center

A Tailwind CSS component for centering flex content in the middle.  
Basically, instead of `flex justify-center items-center`, 
you do `flex-center`.

`flex-center` generates following CSS rule (disregarding responsive variants).

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
  plugins: [require('@downwindcss/flex-center')]
}
```

Only `responsive` variant is enabled by default.  
Same as `flex` utility: https://tailwindcss.com/docs/flex#variants

## Example

**Demo**: https://codesandbox.io/s/flex-center-demo-v1c3k?file=/public/index.html

```html
<!--                                             👇               -->
<body class="antialiased p-8 w-screen h-screen flex-center flex-col">
  <header>
    <h1 class="text-pink-600 font-serif font-bold text-5xl">
      Start here!
    </h1>
  </header>
  <main class="mt-4">
    <section>
      <p class="font-bold text-xl">Have fun with Tailwind CSS!</p>
    </section>
  </main>
</body>
```

## Motivation

I found myself typing `flex justify-center items-center` too many times!  
Ain't nobody got time for that.

Just type `flex-center` and be doen with it.