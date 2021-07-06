//packages:
const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiamF2aWVycGIyNzUiLCJhIjoiY2txaTg4ZTRzMXdpYzJ1bWltbXUwZXNhZiJ9.dVUptpdm3nMBcwc95GwIXg&limit=1';
    request({url, json: true}, (error, {body}) => {
        const {features} = body;
        if(error) {
            callback('Unable to connect to location service!', undefined)
        } else if (features.length === 0) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, {
                place: address,
                longitude: features[0].center[0],
                latitude: features[0].center[1],
                location: features[0].place_name
            })
        }
    })
}

module.exports = geocode;
