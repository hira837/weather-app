const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiaGlyYXlhbWEiLCJhIjoiY2s5ODZhb2gyMHhkYTNsb2NpdHVqYnBpMSJ9.nu8hG-p4HlaQOIVdUXxRFw&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location service!", undefined);
    } else if (!response.body.features.length) {
      callback("Unable to find loaction. Try another search", undefined);
    } else {
      callback(undefined, {
        longtitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode
