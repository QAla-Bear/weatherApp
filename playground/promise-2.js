var request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encAddress = encodeURIComponent(address);
    request({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encAddress,
      json: true
    }, (error, response, body) => {

      if(error) {
        reject('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address.');
      } else if(body.status === 'OK'){
        resolve(body);
      }
    });
  });

};

geocodeAddress('      ').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (error) => {
  console.log(error);
})
