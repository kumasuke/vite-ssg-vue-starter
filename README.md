# Vue + Vite + Typescript Starter

> Vue + Vite + SSG template based on [@antfu](https://github.com/antfu)'s [Vitesse](https://github.com/antfu/vitesse).

<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 File based routing via [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

- 📦 Components auto importing via [vite-plugin-components](https://github.com/antfu/vite-plugin-components)

- 📑 Layout system via [vite-plugin-vue-layouts](https://github.com/johncampionjr/vite-plugin-vue-layouts)

- 🎨 [Windi CSS](https://github.com/windicss/windicss) - on-demand Tailwind CSS with speed

- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-md)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- 🖨 Server-side generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦾 TypeScript, of course

<br>

## Pre-packed

### UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bundle additional features!
  - [Windi CSS Typography](https://windicss.netlify.app/guide/plugins.html#typography) - similar to [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typograph) but for Windi CSS

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - WindiCSS support
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Server-side generation
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [Windi CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - IDE support for Windi CSS
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Usage

### Init

```bash
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

### Development

Just run and visit http://localhost:3000

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.
