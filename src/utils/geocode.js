const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZGVlcGFrdW1yYW8iLCJhIjoiY2tkZmhpM25yMHc3bzJ3bnJ3aTRieXBoZCJ9.Bo-lsSOXxwrVIxUkW97v3w&limit=1'

    request({ url: url, json: true }, (error, {body}={}) => {
        debugger;
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body.features) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode