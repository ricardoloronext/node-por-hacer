const { argv } = require('./config/yargs');
const porHacer = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

if (comando === 'crear') {
  let tarea = porHacer.crear(argv.descripcion);
  console.log(tarea);
}
else if (comando === 'listar') {
  let listado = porHacer.getListado();
  for (let tarea of listado) {
    console.log('========================'.green);
    console.log('=== Tareas por hacer ==='.green);
    console.log(tarea);
  }
}
else if (comando === 'actualizar') {
  let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
  console.log(actualizado);
}
else if (comando === 'borrar') {
  let borrado = porHacer.borrar(argv.descripcion);
  console.log(borrado)
}
else console.log('Comando desconocido')
