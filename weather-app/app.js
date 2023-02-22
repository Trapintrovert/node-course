const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

forecast(42.360253, -71.058291, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
