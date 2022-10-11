if ('serviceWorker'in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then (registrado => console.log('Se instalo corretamente...',registrado))
    .catch( error => console.log ('Fallo la instalacion...', error))
}else{
    console.log('Sevice workers no soportados')
}