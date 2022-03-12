# Building react library using Rollup, How to avoid webpack alias in next.config.js

# issue description

I've setup Rollup to build a React library, when importing the library into a SPA targeting client-side rendering apps(like an app made with create-react-app) everything is okay, but when using it in a next.js app, it complains with `Module not found: Can't resolve 'react'` because it can't import `react` or `react-dom` and the only way to fix it now is to alias them in webpack config inside the `next.js` app(despite already being aliased in `rollup.config.js`)

I'm looking for a way to avoid this `alias` config in `next.config.js` file.

# To re produce the issue

```sh
cd ./react-library
yarn build

cd ../react-library-test-app
yarn run dev
```

Try to remove the added webpack config in `next.config.js` to see the error

> Module not found: Can't resolve 'react'

