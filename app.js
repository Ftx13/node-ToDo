const { argv } = require('./config/yargs');
const { crearListado, getListado, actualizar, borrar } = require('./ToDo/todo');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crearListado(argv.describe);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado();
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.describe, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = borrar(argv.describe);
        console.log('Borrado succesfully');
        break;

    default:
        console.log('Comando no reconocido');




}