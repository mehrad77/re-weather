var request = require("request-promise");

var owm = {
  token: null,
  city: null,
  getCurrent: function() {
    return request({
      method: "GET",
      uri: `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${
        owm.city
      }&APPID=${owm.token}`,
      json: true
      // headers: {
      //   Authorization: "Bearer " + owm.token,
      //   "User-Agent": "My little demo app"
      // }
    });
  }
};

function ReWeather(params) {
  owm.token = params.token;
  owm.city = params.city;
  return owm.getCurrent();
}

export { ReWeather };
