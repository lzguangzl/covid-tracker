# Covid 19 Tracker

## Purpose of the project

- To track covid-19 cases worldwide
- To learn react hooks, flexbox, chartjs, leaflet, numeral

## Project setup

This project is created using [React](https://reactjs.org/) with [Create React App](https://github.com/facebook/create-react-app) and [disease.sh](https://disease.sh/).

`disease.sh`

Language

- JavaScript
- HTML
- CSS

Dependencies

- material-ui
- chart.js
- react-chartjs-2
- leaflet
- react-leaflet
- numeral

## Pre-requisites

[disease.sh](https://disease.sh/)

```
Open API for disease-related statistics

- Free
- Multi-Source data
- Up to Date
- JSON Formatted
```

[Material-UI](https://material-ui.com/)

```
Material-UI is an open-source project that features React components that implement Google's Material Design.

Material-UI is a very solid and stable set of react components that looks appealing and easy to use and customize.
```

[Chart.js](https://www.chartjs.org/)

```
Simple yet flexible JavaScript charting for designers & developers
```

[react-chartjs-2](https://github.com/jerairrest/react-chartjs-2)

```
React wrapper for Chart.js
```

[Leaflet](https://leafletjs.com/)

```
Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 38 KB of JS, it has all the mapping features most developers ever need.
```

[React Leaflet](https://react-leaflet.js.org/)

```
React-Leaflet provides an abstraction of Leaflet as React components. It does not replace Leaflet, only leverages React's lifecycle methods to call the relevant Leaflet handlers.
```

[Numeral.js](http://numeraljs.com/)

```
A javascript library for formatting and manipulating numbers.
```

## Setting up the project

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploy and test

The application is deployed on Firebase using [Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart)

1. Install Firebase CLI

```
npm install -g firebase-tools
```

2. Log in and test the Firebase CLI

```
firebase login
```

3. Initialize the project

```
firebase init

Firebase CLI prompts:
- Select to set up Hosting.

- Select a Firebase project to connect to your local project directory.

- Specify a directory to use as your public root directory.
Example:
    i. What do you want to use as your public directory? build

- Choose a configuration for your site
Example:
    i. Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ii. File build/index.html already exists. Overwrite? No

```

4. Deploy the site

```
firebase deploy
```
