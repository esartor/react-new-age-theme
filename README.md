A React implementation of the [New Age theme by Start Bootstrap](https://github.com/BlackrockDigital/startbootstrap-new-age) that showcases how to approach the components architecture for a React app with self-contained presentational components.


## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and it keeps the same CLI scripts.

- Use `npm start` or `yarn start` to serve the app locally
- Use `npm test` or `yarn test` to run the tests


## Folder Structure

There are 4 main folders inside `src/`:

- `components/` - It contains a folder per component, which in turn contains all the component assets and test file. Having all the components under a single folder is intentional in this case, but real world projects require a different strategy for scalability.
- `pages/` - It contains a folder for each page in the app. Again, each page folder contains all the assets the page need and the test file. A page is in the end a component but with a different status, which is why it's useful to keep the in a separate folder.
- `services/` - In this folder you will find utilities, helpers, API libraries, etc.
- `styles/` - It contains global SASS modules.

## Introduced Dependencies

### General Dependencies

- `react-router` - A declarative routing utility. It's used to give an example of how to create multiple routes for the app while all pages stick to the same structure.
- `classnames` - An utility for conditionally joining classNames together.
- `lodash.throttle` - A throttle function.

### Styling Related Dependencies

The following dependencies were introduced in order to reuse most of the code from the original template which was done over Boostrap 4:

- `node-sass-chokidar` (and `npm-run-all`) - Node bindings to SASS.
- `bootstrap` and `reactstrap` - React Bootstrap 4 components.
- `html5-device-mockups` - HTML5 mockups of popular devices.

Fonts & Icons:

- `simple-line-icons`
- `font-awesome`
- `typeface-catamaran`


### Dev dependencies

- `enzyme` and `enzyme-adapter-react-16`
- `jest-cli`
- `eslint`, `eslint-plugin-react` and `eslint-config-airbnb`
- `sass-lint`
