const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const {getLugarLatLgn} = require('./lugar/lugar');
const {getClima} = require('./clima/clima');


let getInfo = async (direccion) => {
    try {
        let coors=await getLugarLatLgn(direccion);
        let temp=await getClima(coors.lat,coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;
    }
    catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(mensaje=>console.log(mensaje))
    .catch(e=>console.log(e));

