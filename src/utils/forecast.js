const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=4536f4d3444a8f5a5dfd77f744ff109b&query=${latitude},${longitude}`
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0] + ', It is currently ' + body.current.temperature + ' degress out.')
        }
    })
}

module.exports = forecast