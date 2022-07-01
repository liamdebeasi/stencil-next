# Next.js + Stencil repro

## Steps to reproduce issue

1. Clone repo.
2. In `component-library` run the following to install dependencies and build + pack the Stencil component library:

```
npm install && npm run build && npm pack
```

3. In `component-library-react` run the following to install dependencies and build + pack the React component wrappers:

```
npm install && npm run build && npm pack
```

4. In `next-app` run the following to install dependencies and start a dev server:

```
npm install && npm run dev
```

5. Open the app in a browser. Observe that the stylesheets are not loaded for `my-component.`