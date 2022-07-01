This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Structure

- There is a [Custom App](https://nextjs.org/docs/advanced-features/custom-app) component in `pages/_app.tsx`. This is where `setupComponentLibrary` is called. `setupComponentLibrary` calls the `initialize` function in `component-library` which calls `setMode` in Stencil.
- The "inner" page component is in `src/App.tsx`. This is where the Stencil component is rendered.
