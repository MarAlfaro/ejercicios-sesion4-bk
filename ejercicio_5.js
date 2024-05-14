function operacionAsicrona(callback) {
    setTimeout(() => {
        callback('Operación asincrona completada')
    }, 8000)
}

operacionAsicrona((mensaje) => {
    console.log(mensaje);
})