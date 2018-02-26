const axios = require(`axios`);
const weatherResults = (lag,lng)=>{
      let temperature = null;
        const wethercodeURL = `https://api.darksky.net/forecast/7fa261da4fc6cad0aef6384618ce197e/${lag},${lng}`;
        return axios.get(wethercodeURL);
        // .then((response)=>{
        //     const timezone = response.data.timezone;
        //     temperature = response.data.currently.temperature;
        //     const aptemperature = response.data.currently.apparentTemperature;
        //     const visibility = response.data.currently.visibility;
        //     const year = new Date().getFullYear();
        //     const month = new Date().getMonth()+1;
        //     const day = new Date().getDate();
        //     const hour = new Date().getHours();
        //     const min = new Date().getMinutes();
        //     const sec = new Date().getSeconds();
            // console.log(`Your Time zone is ${timezone}`);
            // console.log( `The temperature is ${temperature},and it feels like ${aptemperature}`);
            // console.log(`The visibility is ${visibility}`);
            // console.log(`The current date is ${month}/${day}/${year},the time is ${hour}:${min}:${sec}`);
            // console.log("┻━┻ミ＼(≧ﾛ≦＼)");
            // console.log(`The weather is ${icon}`);
            // console.log(temperature);
          // })
        // console.log(temperature);
        // return temperature;

  }
module.exports = {
  weatherResults
}
