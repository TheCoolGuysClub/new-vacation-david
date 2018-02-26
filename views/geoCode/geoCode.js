const request = require('request');
const geocodeAddress= (address,callback)=>{
  const encodedAddress = encodeURIComponent(address);
  const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
    json:true
  },(error,response,body)=>{
    if(body.status ==="ZERO_RESULTS"){
      // console.log("This address does not exists");
      callback("This address does not exists",undefined);
    }else if (body.status ==="OK"){
      callback(undefined,{
        address:body.results[0].formatted_address,
        lagitude:body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lng
      })
    }
  })
}
module.exports={
  geocodeAddress
}
