const request = require('request');

var getWeather = (lat, lon, callback) => {
  request({
    url: 'https://api.darksky.net/forecast/38d677279f9ec12803b5cf16b6839dcf/' + lat + ',' + lon,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Error getting information from forecast.io.');
    } else if(response.statusCode === 400) {
      callback('Bad request sent to forecast.io');
    } else if(response.statusCode === 404) {
      callback('No information found for that coords.');
    } else if (!error && response.statusCode === 200){
      var celsius = parseFloat(body.currently.temperature);
      celsius = celsius - 32;
      celsius = celsius / 1.8;
      celsius = Math.round(celsius);
      callback(undefined, {
        temperature: celsius,
        apparantTemperature: parseFloat(body.currently.apparentTemperature)
      });
      //console.log('Temperature: ' + celsius + '°C');
    }
  });
};

module.exports.getWeather = getWeather;
