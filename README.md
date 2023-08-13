# No-Wei-Svelte

Fighting the demon king of the open web, using Svelte.

## Why

The Web Environment Integrity (WEI) API is, to some extent, malicious. It allows attesters to block certain users from accessing a website, basically discrimination on the web. For more information, [see here](https://www.fsf.org/blogs/community/web-environment-integrity-is-an-all-out-attack-on-the-free-internet).

## How to use

> This project is licensed under [MIT](https://mit-license.org/)

1. Install

```bash
npm install no-wei-svelte
```

2. Use in your Svelte project

```svelte
<!-- +page.svelte -->
<script>
import { NoWei } from "no-wei-svelte"
</script>
<NoWei />
```

3. Use the badge (optional)

```svelte
<!-- +page.svelte -->
<script>
import { Badge } from "no-wei-svelte"
</script>
<!-- Somewhere in the footer or wherever you want -->
<Badge />
```

## Configs

The NoWei component supports the following configurations:

```svelte
<NoWei 
  dismissable: boolean = true
  persistent: boolean = true
  pardonChromebook: boolean = true
  bgStyle: "blur" | "black" = "blur"
/>
```

and the badge supports the following configurations:

```svelte
<Badge
  size: number = 11
/>
```

## Similar projects

[No-Wei](https://github.com/Froxcey/no-wei/): previous generation of this project, for vanilla only

No-Wei-React: A not yet released version of this project for React

[Fight For the Open Web](https://github.com/Young-Lord/fight-for-the-open-web): Alternative for the No-Wei project

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of the library, everything inside `src/routes` is used as a showcase or preview app (just a default SvelteKit hello world project).

## Building

To build the library:

```bash
npm run package
```
