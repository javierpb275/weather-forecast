//packages:
const request = require('request');

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5287c1ed8a65a3139af80d11998a60ca&query=' + encodeURIComponent(address);
    request({url, json: true}, (err, {body}) => {
        const {current, error} = body
        if(err) {
            callback('Unable to connect to weather service!',undefined)
        } else if(error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined, 'It is ' + current.temperature + ' degrees out. And there is a ' + current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast;