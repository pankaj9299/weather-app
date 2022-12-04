const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=79e58311ad7862c40898e58b12d37df8&query='+latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.error) {
            callback('Unable to process this request', undefined)
        } else {
            callback(undefined, 'Partially cloudy started in the evening. It is currently '+body.current.temperature+' degree out. There is a '+body.current.humidity+'% chance of rain.')
        }
    })
}

module.exports = forecast
