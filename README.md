# ReWeather

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/re-weather)
![license](https://img.shields.io/badge/license-MIT%20License-green.svg)

A package to get weather in js.

## Features

* No design. Just API wrapper.
* Supports openweathermap API
* Extendable to more external API'S
* Only Foucus on Data.

### Installing

Install via npm:

```
npm install re-weather --save
```

### Quick Example

This example shows how to use the re-weather in React.js to set it's data into a API.

```javascript
ReWeather({
  token: "This-is-openweathermap-api",
  city: "Tehran"
}).then(weather =>
  this.setState({
    weather
  })
);
```

## Dociumention

### Current weather data: getCurrent()

will get current weather
read [full OWM-API docs](https://openweathermap.org/current) to learn more.
it will return sometinhg like this:

```javascript
{
  "coord": {
    "lon":145.77,"lat":-16.92
  },
  "weather":[
    {"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}
  ],
  "base":"cmc stations",
  "main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
  "wind":{"speed":5.1,"deg":150},
  "clouds":{"all":75},
  "rain":{"3h":3},
  "dt":1435658272,
  "sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
  "id":2172797,
  "name":"Cairns",
  "cod":200
}
```

### Current weather data: getCurrent()

will get 5 day forecast that is available at any location or city. It includes weather data every 3 hours.
read [full OWM-API docs](https://openweathermap.org/forecast5) to learn more.

> In progress...

## Credits

re-weather is based on (Amar Shaked)[https://github.com/AmarShaked/ReactWeather] idea.

### License

MIT
