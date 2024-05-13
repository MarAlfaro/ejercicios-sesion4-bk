function multiplicar(a,b,callback) {
 resultado = a * b;
 callback(resultado)
}

multiplicar(6, 3, (resultado) => {
    console.log('Resultado', resultado)
})