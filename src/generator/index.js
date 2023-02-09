function* generator(){
    yield 1;
    yield 2;
    yield 3;
}
const gen = generator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

//Ejemplo 2
function* iterate(array){
    for (let value of array) {
        yield value        
    }
}
const iter = iterate(['Oscar', 'Andrés', 'Ivan'])

iter.push(['Felipe', 'Ramiro'])

console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)