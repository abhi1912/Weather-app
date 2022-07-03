const request = require("request")

const geocode = (address,callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxpc2hhNDI4MCIsImEiOiJjbDR6dW5xOXEwbmg2M2NwbTMyM3VpYjdhIn0.6e7lDV196wsljbszu4uGMQ'

    request({url, json:true}, (error,{body}) => {
        if(error){
            callback('Unable to find location services', undefined)
        }
        else if(body.features.length === 0)
        {
            callback('Unable to find the location. Try again.', undefined)
        }
        else
        {
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode