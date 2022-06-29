# Project recipe

A short description of what steps to take to reproduce this repo

## Steps

### Initialization

First run the commando for creating a vite app and follow the instructions.

```bash
yarn create vite
```

### Prettier

Then we add prettier to deps with

```bash
yarn add prettier
```

And create `.prettierrc.json` and `.prettierignore` in the root repo. If you haven't changed the default vite
build folder you can add `dist/` to the `.prettierignore` file.

Remember to format whole project with `yarn prettier .`. You can also add the auto import organize plugin to prettier by installing `prettier-plugin-import-organize` and adding it to devDependencies.

### Additional vite config

Disclaimer: Not exactly sure what these plugins actually do and why we need to add `@types/node` nut the compiler is not really happy before we do this. I think its because `process` is unnown until we do this.

```bash
yarn add dotenv rollup-plugin-polyfill-node vite-tsconfig-paths
yarn add --dev @types/node rollup-plugin-node-builtins rollup-plugin-node-globals
```

After this we need to expand the `vite-env` file configuration.

```ts
/// <reference types="vite/client" />

interface ImportMetaenv {
  readonly VITE_APP_TITLE: string
  readonly VITE_NOTE_ENV: 'local' | 'development' | 'production'
}

interface ImportMeta {
  readonly env: ImportMetaenv
}
```

### Standard project changes

- Copy and paste normalize css into index.css
- Start moving around components into a folder structure that makes a bit more sense
