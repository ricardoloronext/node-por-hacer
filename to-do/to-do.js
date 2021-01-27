const fs = require('fs');

let listadoPorHacer = [];


const guardarDb = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw Error('No se pudo grabar', err)
  });
};

const cargarDb = () => {
  try {
    listadoPorHacer = require('../db/data.json');
  } catch (error) {
    listadoPorHacer = [];
  }
  
};

const crear = (descripcion) => {
  cargarDb();
  let toDo = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(toDo);
  guardarDb();
  return toDo;
};

const getListado = () => {
  cargarDb();
  return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
  cargarDb();
  let index = listadoPorHacer.findIndex(el => el.descripcion === descripcion);
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDb();
    return true;
  } else {
      return false;
  }
};

const borrar = (descripcion) => {
  cargarDb();
  let index = listadoPorHacer.findIndex(el => el.descripcion === descripcion);
  if (index >= 0) {
    let removed = listadoPorHacer.splice(index, 1);
    guardarDb();
    return removed;
  }  else {
    return false;
  }
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}