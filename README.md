# React Redux Weather Forecast

[React tutorial](https://www.udemy.com/react-redux/) to display the weather forecast of a city.
This project cover section 5 of the tutorial.

### IMPORTANT

This project was cloned from [StephenGrider/ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter)


### Content

* [Google Map API](https://developers.google.com/maps/) 
    - To display the map of the city
* [Openweathermap API](https://openweathermap.org/forecast5)
    - To retrieve 5-days weather forecast data
* [React-sparklines](https://www.npmjs.com/package/react-sparklines)
    - To display weather forecast data in a chart
* Concept of middleware

### Installation

```
> git clone https://github.com/fibanez6/react-redux-weather.git
> cd react-redux-weather
> npm install
> npm start
```

open http://localhost:8080/

And set your OpenWeatherMap API Key in the [Ajax call Action](src/actions/index.js#L3) file.


### Heroku installation

Add the following lines into the package.json:
```
  ...
  "engines": {
    "node": "8.9.4"
  },
  "scripts": {
    "dev": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
    "test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js --recursive ./test",
    "test:watch": "npm run test -- --watch",
    "postinstall": "webpack -p",
    "start": "node server.js"
  },
  ....
```
Run the following commands:
```
> heroku login
> heroku git:remote -a fibanez-cityweather
To allow to use dev libraries (ie: webpack)
> heroku config:set NPM_CONFIG_PRODUCTION=false
> git push heroku master
```
