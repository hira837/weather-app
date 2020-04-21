const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=083d5df5242e489cd4ef0e96618bc5c7&query=' + latitude + ',' + longitude + '&units=m'

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (response.body.error) {
      callback('Unable to find weather data', undefined);
    } else {
      callback(undefined, {
        description: response.body.current.weather_descriptions[0],
        temperature: response.body.current.temperature,
        feelslike: response.body.current.feelslike
      });
    }
  })

}

module.exports = forecast