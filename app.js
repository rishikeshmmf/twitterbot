const Twitter = require('twitter');
const config = require('./config.js');

// Initialize Twitter client
const T = new Twitter(config);

// Make a GET request to the /2/users/me endpoint
T.get('users/me', (err, data, response) => {
  // If there is an error, log it and exit
  if(err){
    return console.log(err);
  }
  // Log user information to the console
  console.log(data);
});
