const axios = require('axios');

//busca en el api de google la ciudad,longitud y latitud
const getLugarLatLgn = async (direccion) => {
    //formateo la ciudad ingresada para evitar errores de url
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    //valido si la respuesta no tiene resultados y genero un error
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    //obtengo variables de la respuesta
    let ciudad = resp.data.results[0];
    let {formatted_address} = ciudad;
    let {lat, lng} = ciudad.geometry.location;

    //construyo el resultado
    return {
        direccion:formatted_address,
        lat,
        lng
    }
};

module.exports={
    getLugarLatLgn
};