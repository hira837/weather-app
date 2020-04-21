const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const locationFromCommand = process.argv[2]

if(!locationFromCommand) {
  console.log('Please provide location name on command')
} else {
  geocode(locationFromCommand, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  })
}
