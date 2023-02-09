import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
    return fetch(urlApi);
}

/*
// esto es una promesa que se usa sin el new Promise, en vez de esto se usa el fetch por defecto es una promesa
fetchData(`${API}/products`) //Se pasa el valor de la url
    .then(response => response.json()) // Con el json se transforma la información del primer llamado a un objeto JSON
    .then(products => { //De esta manera se piden todos los productos 
        console.log(products)
    })
    .then(()=>{
        console.log('Hola')
    })
    .catch(error => console.log(error)) // En caso de recibir un error poder mostrar el error en la consola
*/

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => { //De esta manera se piden todos los productos 
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)        
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)        
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(error => console.log(error))
    .finally(()=> console.log("Finally"))
