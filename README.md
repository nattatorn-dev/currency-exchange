
# # React Universal Saga (currency-exchange)
---

## Getting Started

Universal React App Starter featuring Redux Saga. Heavily modified version of [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example) combined with Redux Saga [real-world](https://github.com/yelouafi/redux-saga/tree/master/examples/real-world) example.

`$ git clone https://github.com/nattatorn-dev/currency-exchange`

`$ cd currency-exchange && sudo yarn install`

`$ sudo yarn run dev` (run in development mode)

Live Demo: [currency-exchange-rate.herokuapp.com](https://currency-exchange-rate.herokuapp.com)

## Features

* [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering, with Client and Server Side Data Fetching
* [React](https://github.com/facebook/react) - latest version `^15.2.0`
* [Redux](https://github.com/rackt/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation
* [Redux Saga](https://github.com/yelouafi/redux-saga) to handle all of your Side Effects logic in a central place
* [React Router](https://github.com/rackt/react-router)
* [Express](http://expressjs.com)
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation DX (developer experience). Watch [Dan Abramov's talk](https://www.youtube.com/watch?v=xsSnOQynTHs).
* [ESLint](http://eslint.org) to maintain a consistent code style
* [redux-form](https://github.com/erikras/redux-form) to manage form state in Redux
* [PostCSS](https://github.com/postcss/postcss-loader), [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css, sass and less,
b.com/nfl/react-helmet) to manage title and meta tag information on both server and client
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) to allow require() work for statics both on client and server
* [Jest](https://facebook.github.io/jest/) to allow writing unit tests for the project.
* Refer to `package.json` for more details


### Server-side Data Fetching

The [redux-saga](https://github.com/yelouafi/redux-saga) provides a mechanism for server-side data fetching from the actual backend API servers/services, when it reaches client-side (React) there is no need to do additional network call. You have to define the Sagas that a container need (refers to `containers/UserPage.js > UserPage.preload` for example) for server-side to fetch. PS: You have the flexibility to implement additional logic (e.g. handle authentication) when fetching data at server-side rendering stage, as it differs from client-side.


### Unit Tests

The project uses [Jest](https://facebook.github.io/jest) to run your unit tests and the [Test Utilities](http://facebook.github.io/react/docs/test-utils.html) from Facebook api.

An example is available at `components > User`.

To run the tests in the project, just simply run `yarn run test`.

Any contribution is welcome.

Cheers,
nattatorn-dev @maybenexttime
