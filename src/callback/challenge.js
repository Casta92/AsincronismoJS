// Creacion de API Fake de Platzi
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Llamado a nuestra API, se genera una variable que haer referencia al recurso
const API = 'https://api.escuelajs.co/api/v1'

// Creacion de funcion que nos permite recibir la URL de la API y un callback (funcion anonima) para recibir la solicitud al llamado de la API
// Dentro de la funcion se reciben dos argumentos: la url a la cual se hace el llamado y el callback la informacion que nos va a retornar el elemento)
function fetchData(urlAPI, callback){
    let xhttp = new XMLHttpRequest();
    //El metodo .open realiza la petición de apertura de comunicación, el metodo puede ser 'GET' o 'POST', luego se envia la URL, si es asincrono (true o false), usuario y contraseña. En esta caso solo se utiliza el metodo, la url y async
    xhttp.open('GET', urlAPI, true); //Primer recurso. primer elemento tipo GET para recibir datos, urlAPI es la url que se va a utilizar y true para habilitarlo

    xhttp.onreadystatechange = function(event){ //Escucha diferentes estados de la solicitud y conocer cuando está disponible
        
        //el atributo readyState define el estado del objeto XMLHttpRequest - 0 No inicializado -1 Loading -2 ejecutado -3 interactuando - 4 completado
        if (xhttp.readyState === 4) { //Estado 4, que es cuando se ha completado la llamada, por lo que se quiere validar que ya este completada esa informacion
            if (xhttp.status === 200) { //Validar el estatus sobre valor y tipo, 200= la solicitud ha sido correcta
                //se ejecuta el callback recibiendo como argumentos un objeto, como la respuesta de la API es un texto plano, el metodo JSON.parse tranformará este texto en un objeto.
                //El atributo devuelve un DOMString que contiene la  respuesta a la consulta como un texto o null si la consulta no tuvo exito o aun no ha sido completada.
                
                callback(null, JSON.parse(xhttp.responseText));//dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
            } else {
                const error = new Error('Error' + urlAPI);
                return callback(error, null); //es null porque no se está regresando ningún dato
            }
        }            
    }
    xhttp.send();
}

fetchData(`${API}/products`, function(error1, data1){
    if (error1) 
        return console.error(error1)        
    
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if (error2) 
            return console.error(error2);            
        
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3)
                console.error(error3);
                console.log(data1[0]);
                console.log(data2.title);
                console.log(data3.name)
            
        })
    })
})