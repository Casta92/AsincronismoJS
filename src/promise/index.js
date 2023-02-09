// Una promesa tiene 3 estados: Pendiente, cumplido y rechazado
// Estructura base de una prommesa
const promise = new Promise(function(resolve, reject){
    resolve('Hey')
});


// Ejercicio. Contar vacas con promesas y llevar a un resultado
const cows = 8;

const countCows = new Promise(function(resolve, reject){
    if (cows>10) {
        resolve(`We have ${cows} cows on the farm`)
    } else {
        reject ('There is not cows on the farm')
    }
})
//Ejecutar la promesa
countCows.then((result) => {
    console.log(result)
}).catch((error) =>{ //Se pone el .catch para que el error se pueda imprimir
    console.log(error) 
}).finally(()=> { // el .finally se usa para avisar que la promesa ha terminado
    console.log('Finally')
})