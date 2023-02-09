import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

// Se crea funcion fetchData

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json()
    return data;
}

// Se crea funcion que se encargara de hacer las solicitudes a todos los productos, un producto en particular y la categoria para posteriormente imprimir en consola 

const anotherFunction = async (urlApi) => {
    try { //try es donde va a estar lo que queremos que haya en respuesta a la peticion de la API, de lo contrario seria un reject y pasaria al catch
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`)
        const category = await fetchData(`${API}/categories/${product.category.id}`)

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch(error) {        
        console.error(error)
    }
}

anotherFunction(API)