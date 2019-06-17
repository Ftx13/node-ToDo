let describe = {
    demand: true,
    alias: 'd',
    describe: 'concha de la nora'
}
let completado = {
    alias: 'c',
    default: true,
    describe: 'wasaaaaaaaaaaaaaaa!'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemnto por hacer', {
        describe
    })
    .command('actualizar', 'Actualiza estado completado de una tarea', {
        describe,
        completado
    })
    .command('borrar', 'Eliminar archivo', {
        describe
    })
    .help()
    .argv

module.exports = {
    argv
}