

const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer'
};

const completado = {
  alias: 'c',
  default: true,
  desc: 'Marca como completada o pendiente la tarea'
};


const argv = require('yargs')
  .command('crear', 'Crear por hacer', {descripcion, completado})
  .command('actualizar', 'Actualiza todas las tareas por hacer', {descripcion, completado})
  .command('borrar', 'Borra una tarea', {descripcion})
  .help()
  .argv;

module.exports = {
  argv
}