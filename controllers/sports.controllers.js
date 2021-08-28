//TRUCAZO
const { response, request } = require('express')
const fs = require('fs');
const { stringify } = require('querystring');
const pathDB = './db/sports.json';



const readDB = () => {
    const data = JSON.parse(fs.readFileSync(pathDB, 'utf-8'));
    return data;
}

const saveDB = (data) => {
    fs.writeFileSync(pathDB, JSON.stringify({ deportes: data }));

}



const getSports = async(req = request, res = response) => {
    const { deportes } = readDB();
    res.json({ deportes });
}

const createSport = async(req = request, res = response) => {
    const { nombre, precio } = req.query;
    const { deportes } = readDB();
    const newSport = {
        nombre,
        precio,
    }
    deportes.push(newSport);
    saveDB(deportes);
    res.json(JSON.stringify(newSport));
}

const updateSport = async(req = request, res = response) => {
    const { nombre, precio } = req.query;
    const { deportes } = readDB();
    const deportesUpdate = deportes.map((deporte) => {
        if (deporte.nombre === nombre) {
            deporte.precio = precio
        }
        return deporte;
    });
    saveDB(deportesUpdate);
    res.json(JSON.stringify({ nombre, precio }));
}

// const patchUsers = (req = request, res = response) => {
//     res.json({
//         msg: 'Patch API Controller'
//     })
// }

const deleteSport = (req = request, res = response) => {
    const { nombre, precio } = req.query;
    const { deportes } = readDB();
    const deportesDelete = deportes.filter((deporte) => {
        return deporte.nombre !== nombre;
    });
    saveDB(deportesDelete);
    res.json(JSON.stringify({ nombre, precio }));
}

module.exports = {
    getSports,
    createSport,
    updateSport,
    deleteSport
}