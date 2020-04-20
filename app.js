const request = require('request')

// const url = "http://api.weatherstack.com/current?access_key=083d5df5242e489cd4ef0e96618bc5c7&query=37.8267,-122.4233&units=f"
const url = "http://api.weatherstack.com/current?access_key=083d5df5242e489cd4ef0e96618bc5c7"

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log(response.body.error.info);
  } else {
    console.log(response.body.current.weather_descriptions[0]);
    console.log('It is currently ' + response.body.current.temperature + ' degrees.');
    console.log("But it feels like " + response.body.current.feelslike+ ' degrees out.');
  }
})

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGlyYXlhbWEiLCJhIjoiY2s5ODZhb2gyMHhkYTNsb2NpdHVqYnBpMSJ9.nu8hG-p4HlaQOIVdUXxRFw&limit=1'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/fyvgbhnj.json?access_token=pk.eyJ1IjoiaGlyYXlhbWEiLCJhIjoiY2s5ODZhb2gyMHhkYTNsb2NpdHVqYnBpMSJ9.nu8hG-p4HlaQOIVdUXxRFw&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
  if(error) {
    console.log('Unable to connect to geo service!');
  } else if (!response.body.features.length) {
    console.log('No data');
  } else {
    const longtitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    console.log("longtitude(経度): " + longtitude);
    console.log("latititude(緯度): " + latitude);
  }
});