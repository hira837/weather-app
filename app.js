const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const locationFromCommand = process.argv[2]

if(!locationFromCommand) {
  console.log('Please provide location name on command')
} else {
  geocode(locationFromCommand, (error, {latitude, longitude, location}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  })
}
