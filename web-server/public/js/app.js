console.log('Client side javascript file loaded!');

fetch('http://localhost:3000/weather?address=lagos').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast.description[0]);
    }
  });
});
