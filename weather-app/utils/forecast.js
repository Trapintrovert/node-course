const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=e0884768dda46ea977def2f62abbddb9&query=' +
    encodeURIComponent(latitude) +
    ',' +
    encodeURIComponent(longitude) +
    '&units=f';

  request({ url, json: true }, (error, { body }) => {
    const {
      current: { weather_descriptions, temperature, feelslike },
    } = body;
    if (error) {
      callback('Unable to connect the Weather Server!', undefined);
    } else if (body.error) {
      callback('Unable to find weather for this location', undefined);
    } else {
      callback(undefined, {
        description: weather_descriptions,
        temperature,
        feelslike,
      });
    }
  });
};

module.exports = forecast;
