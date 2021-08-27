let request=require('request');

let api_key = 'b8bd6fac5e37d4dffb5c346de37a1239';
const CITIES = ['Delhi','Patna','Allahabad'];
const city=CITIES[Math.floor(Math.random()*CITIES.length)];

let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+api_key;
request(url, function (error, response, body) {
    console.log("Fetching Data");
    if (!error && response.statusCode == 200) {
        let data = JSON.parse(body);
        console.log("Data Fetched");
        console.log(city);
        console.log("Temperature: "+data.main.temp+"C");
        console.log("Humidity: "+data.main.humidity+"%");
        console.log("Pressure: "+data.main.pressure+"hPa");
        console.log("Wind Speed: "+data.wind.speed+"m/s");
        console.log("Wind Direction: "+data.wind.deg);
        greeting();
    }
    else {
        console.log("Error: "+error);
    }
});
function greeting() {
    console.log(" Fetching Successfuly");
    
}