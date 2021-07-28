const express = require('express');

const puerto = 8080;
const app = express();

// Objeto productos
const lProductos = [
	{
		"id": 1,
		"title": "Samantha",
		"price": 155000,
		"thumbnail": "/urlProd"
	},
	{
		"id": 2,
		"title": "Samantha",
		"price": 155000,
		"thumbnail": "/urlProd"
	},
	{
		"id": 3,
		"title": "Samantha",
		"price": 155000,
		"thumbnail": "/urlProd"
    },
    {
		"id": 4,
		"title": "Samantha",
		"price": 155000,
		"thumbnail": "/urlProd"
	},
	{
		"id": 5,
		"title": "Samantha",
		"price": 155000,
		"thumbnail": "/urlProd"
    }
]


const server = app.listen(puerto, () => 
    console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
    console.log('Error => ', err);
})


// obtiene el número de registros del arreglo productos.
const numReg = lProductos.length;


//Obtiene las cant. de visitas de las apis: items y item-random
const visItems = 0
const vistItemRandom = 0;


// responde un objeto con todos los productos y su cantidad total en el 
// siguiente formato: { items: [productos], cantidad: (cantidad productos) }
app.get('/api/items', (req, res) => {
    // variable de registro de visitas
    visItems = visItems++;

    res.json({
        items : lProductos,
        cantidad: numReg
    })
})


/*devuelva un producto elegido al azar desde un array de productos que 
 se encuentran en el archivo 'productos.txt'. El formato de respuesta será: { item: {producto} }
 */
app.get('/api/item-random', (req, res) => {
    // variable de registro de visitas
    vistItemRandom = vistItemRandom++;

    // Obtiene n° ramdom
    const numRamdon = Math.floor(Math.random() * (parseInt(numReg) - 1) + 1);  
    const rProd = lProductos[numRamdon];
    res.json({
        item : rProd
    })
})

/**La ruta get '/visitas' devuelve un objeto que indica cuantas veces se
 *  visitó la ruta del punto 1 y cuantas la ruta del punto 2. Contestar con el formato: 
 *  { visitas : { items: cantidad, item: cantidad } }
 */
app.get('/api/visitas', (req, res) => {
    // req.query.price => productos?price=100&nombre=Escuadra
})