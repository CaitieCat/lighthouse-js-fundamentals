const request = require('request');
let query = process.argv.slice(2);
query = query.toString();
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + query;
request(url , (error, response, body) => {
  if (error !== null) {
    console.log('error:', error); // Print the error if one occurred
  }
  if (query === '') {
    console.log('Please enter a breed');
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});