![Alt text](https://raw.githubusercontent.com/AmarShaked/ReactWeather/master/widget.png?raw=true "re-weather")

# ReWeather
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/re-weather)
![license](https://img.shields.io/badge/license-MIT%20License-green.svg)

Minimalistic react weather component.


## Features
- No design. Just API wrapper.
- Supports openweathermap API
- Extendable to more external API'S
- Only Foucus on Data.



### Installing
Install via npm:
```
npm install react-weather --save
```


### Quick Example
This example shows how to use the GenericWeather component.
The component display static data via props.
``` javascript
import ReactDOM from 'react-dom';
import { GenericWeather } from 'react-weather';


ReactDOM.render(
  <GenericWeather city="Jerusalem" temp=17.61 status="sun" />,
  document.getElementById('root')
)
```

#### Example using  Openweathermap api
https://openweathermap.org/api - Get real time weather via Openweathermap api.

``` javascript
import ReactDOM from 'react-dom';
import { OpenWeatherMap } from 'react-weather';


ReactDOM.render(
  <OpenWeatherMap city="Jerusalem" country="IL" appid="your-api-key" />,
  document.getElementById('root')
)
```


## ReactWeather API

##### GenericWeather
The basic component is GenericWeather.
this component is the main component, all the other components use it.
```
<GenericWeather />
```

props:
  - city - The city name
  - temp - the temperature
  - status - the icon to show - meanwhile it's just sun / rain

###### OpenWeatherMap
This component use the openweathermap api to get weather data.
the component fetch using axios data from the api, and render the GenericWeather for you.
```
<OpenWeatherMap />
```
props:
- city - The city name - required
- country - The country code - not required
- appid - The api key from openweathermap - required
- units - The units of the temperature - metric / imperial - not required, default is metric

### Credits
re-weather is based on (Amar Shaked)[https://github.com/AmarShaked/ReactWeather] idea.

### License
MIT
