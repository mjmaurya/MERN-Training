const request=require('request')

const geocode=(address,callback)=>{

    const url1='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2hhbGluaTk4IiwiYSI6ImNqejRsZDVlZDAybzEzZW56NXpxYTRwdG0ifQ.V_Oz9BJ972Q9Qvh9wMnpQQ&limit=1'
    request({ url: geocodeURL, json: true }, (error, response) => {
        if(error){
            callback("Unable to fetch due to network issue",undefined);
        }
        else if(response.body.features.length==0){
            callback("Unable to fetch due to Adress issue",undefined);
        else{
            callback(undefined,{
            latitude : response.body.features[0].center[0],
            longitude : response.body.features[0].center[1],
            location: response.body.features.location
            });
        }
    })

    module.export=geocode