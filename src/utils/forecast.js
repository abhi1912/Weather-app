const request = require('request');

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=766dddaa0f361c027c6f9e935dac4070&query=' + latitude + ',' + longitude+ '&units=f'

    request({url, json: true},(error,{body}) => {
        
        if(error){
            callback('Unable to connect to weather service.',undefined)
        }
        else if(body.error)
        {
            callback('Unable to find location.', undefined)
        }
        else
        {   const temp = body.current.temperature
            const rain = body.current.precip
            const humidity = body.current.humidity
            
            callback(undefined, 'The weather is ' + body.current.weather_descriptions[0] + '.\n Currently, the temperature is ' + temp + ' degrees Fahrenheit. There is ' + rain +
             '% chance of rain.\n Humidity is ' + humidity + '%.')
        }

        })
    }




module.exports = forecast