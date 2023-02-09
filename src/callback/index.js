function sum(num1, num2){
    return num1 + num2;
}
function res(num1, num2){
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}

console.log(sum(4,6))

function calc(num1, num2, callback){
    return callback (num1, num2);
}
console.log(calc(10, 20, sum))
console.log(calc(10, 20, res))
console.log(calc(10, 20, mult))
console.log(calc(10, 20, div))

// Otro ejemplo: SetTimeOut -> pasar una funcion y que se ejecute en el tiempo que yo quiera

setTimeout(function(){
    console.log('Hola Tardío')
}, 6000) //Funcion que se va a ejecutar 5 segundos después 

//Funcion de saludo en funcion del tiempo
function saludo(name){
    console.log(`Hola ${name}!`);
}
setTimeout(saludo, 4000, 'Andres') //(Funcion, Tiempo, Argumento)