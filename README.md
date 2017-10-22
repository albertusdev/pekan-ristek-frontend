## Description
Pekan Ristek Main Event Frontend Website

Pekan Ristek is an annual event held by RISTEK Fasilkom UI

The event includes:
=> Competition (UI/UX, Internal Problem Solving Competition, CTF, and CITD)
=> Playground
=> Seminar
=> Ristek showcase

More about RISTEK: ristek.cs.ui.ac.id

## Usage and Commands:
Clone the repo
```sh
git clone https://github.com/albertusangga/pekan-ristek-frontend
```

Install dependencies

```sh
npm install
npm start # run development server at :4000
npm run build # build production to dist/
```
Run at local:
```
NODE_ENV=local npm run dev
```

## Backend are at Ragil's Gitlab Repostiory:
-> To allow UI SSO you have to setup nginx reverse proxy to run the frontend and backend at the same port


## Tech

1. React
2. Babel (stage-0, async-await)
3. ESLint + Prettier
4. Redux
    - [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
    - [Redux Thunk](https://github.com/gaearon/redux-thunk)
    - [Redux Logger](https://github.com/evgenyrodionov/redux-logger)
    - [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
5. [Ava](https://github.com/avajs/ava)
    - [Enzyme](https://github.com/airbnb/enzyme/)
    - [Redux Mock Store](https://github.com/arnaudbenard/redux-mock-store)
6. [React Router](https://reacttraining.com/react-router/)
    - [React Router Redux](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)
7. [Styled Components](https://github.com/styled-components/styled-components)
8. [Superagent](https://github.com/visionmedia/superagent)
9. Zero-configuration build ([poi](https://github.com/egoist/poi))

## Copyright
This repository and boilerplate are taken from rkkautsar/react-starter repository.
Credits to Rakha Kanz.