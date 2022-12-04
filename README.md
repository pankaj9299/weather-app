
# Weather App

This is nodeJS application to grab the information about the weather. I am using the Mapbox API to get the latitude and longitude of the provided address through the HTML form and rendering the weather forecast data using the Weather Stack API. 

Install node dependancies

```bash
  npm install
```


## API used:

 - [Weather Stack](https://weatherstack.com)
 - [MapBox](https://mapbox.com)


## API Reference

#### Get weather information

```http
  GET /weather?address={place_name}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `address` | `string` | **Required**.  |


#### geocode(address, callback)

First arguments to get the address to fetch the latitude and longitude. Second argument used to execute callback function.

#### forecast(latitude, longitude, callback)

First and second arguments to get the latitude and longitude. Second argument used to execute callback function.

## Authors

- [@pankaj9299](https://github.com/pankaj9299)
