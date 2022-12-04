const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicGFua2FqZm9yYWxsIiwiYSI6ImNsYWp4cXFwbTBmZmkzd251Zzk3d2R6NTAifQ.DG1VUW1_tyO8o6ase5KE6w&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location service.', undefined)
        } else if(body.features.length === 0) {
            callback('No record found. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                place: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode