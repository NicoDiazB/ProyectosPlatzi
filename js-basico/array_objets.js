// Creo un array con objetos dentro
var articulos = [
    { nombre: "habas", sabor: "teriyaki",peso: 69, precio: 6000 },
    { nombre: "Garbarncitos", sabor: "Chili-limon",peso: 250 , precio: 20000},
    { nombre: "Maicitos", sabor: "vinagre", peso: 450, precio: 38000},
    { nombre: "mix", sabor: "wasabi", peso: 1000, precio: 42000},
    { nombre: "almendra", sabor: "miel", peso: 300, precio: 25000},
    { nombre: "pistacho", sabor: "limon", peso: 100, precio: 7000},
]

//existe varios metodos para sacar informacion de una lista de objetos que esten dentro de un array

// EJ 1/ .filter
// devuelve todos los elementos del array que cumplan con la condición dada
// creamos una nueva variable que va a contener los objetos que haya filtrado con este metodo
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.precio <= 25000
});
// este array nuevo guardaria los objetos que cumplan con la caractersitica especificada que estan dentro del array original  

// EJ 2/ .map 

// este metodo te busca y te saca la propiedad que deseas de un objeto que este dentro del array

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
// crea un array con el nombre de cada articulo

//EJ 3/ .find 

// este metodo crea un nuevo array que devuelve el primer valor que coincide de la colección.
// Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.
// este metodo solo valida un true o un false 

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "habas" // tener en cuenta que si hay algun espacio o algo en las caracteristicas del array va a dar undefined 
});
//crea un array con las especificaciones que tiene el objeto

// EJ 4 metodo .forEach
// este metodo no crea un array simplemente hace un filtrado sobre el array matriz y me va a devolver un resultado

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

//EJ 5 metodo .some 
// regresa una validacion de verdadero o falso para articulo que cumplan con la validacion. 

var articulosBaratos = articulos.some(function(articulo){
    return articulo.precio <= 2000;
}); // le estoy pidiendo que busque artciluos con el precio menor o igual a 2000
    // en este caso me daria falso ya que no tengo ningun artuclo menor a ese precio o igual 

