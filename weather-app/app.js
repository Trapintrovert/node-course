const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=e0884768dda46ea977def2f62abbddb9&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out. `
  );
});

// Geocoding
// Address -> Lat/Log -> Weather

const geocodeUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHJhcGludHJvdmVydCIsImEiOiJjazIzdmlmb2IwZWV3M2JyZTZvN3A3ZWxmIn0.tBmFIOC_BNtDE0HaJy2T6w&limit=1';

request({ url: geocodeUrl, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];

  console.log(latitude, longitude);
});
