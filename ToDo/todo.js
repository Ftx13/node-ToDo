const fs = require('fs');
const color = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

const crearListado = (describe) => {
    cargarDB();
    let toDo = {
        describe,
        completado: false
    };

    listadoPorHacer.push(toDo);
    guardarDB();

    return toDo;
}

const getListado = () => {
    cargarDB();
    for (let tarea of listadoPorHacer) {
        console.log('==========TO DO=========='.rainbow);
        console.log(tarea.describe);
        console.log('Estado: ', tarea.completado);
        console.log('========================='.rainbow);
        console.log('\n');

    }
}

const actualizar = (describe, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.describe === describe);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (describe) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.describe !== describe;
    });

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = {
    crearListado,
    getListado,
    actualizar,
    borrar
}