const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true
    }
})
.help()
.alias('h', 'help')
.argv;

var encAddress = encodeURIComponent(argv.address);
var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encAddress;

axios.get(geocodeURL).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('No results for given address.');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lon = response.data.results[0].geometry.location.lng;
  var weatherURL = 'https://api.darksky.net/forecast/38d677279f9ec12803b5cf16b6839dcf/' + lat + ',' + lon;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherURL);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It is currently ${temperature}, it feels like ${apparentTemperature}`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND') {
    console.log('Could not connect to API address.');
  } else {
    console.log(e.message);
  }
  //console.log(e);
});
