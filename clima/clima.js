const axios = require('axios');
const getClima = async (lat, lgn) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&units=metric&appid=2b0862dbd8cc74f8a8ca3e44958952ef`);
    let datos=resp.data.main;
    let {temp}=datos;
    return temp;
};

module.exports={
    getClima
}