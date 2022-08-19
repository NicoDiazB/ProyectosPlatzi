
//Creamos la función autos que nos permite registar cada auto
function auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año    
}
//creo array con los datos que necesito para la creacion de mis carros 
var marcas = ["Tesla", "Nissan", "Mazda"]
var modelos = ["Sx", "discover", "skyactive"]
var año = [2015, 2019, 2020]

//creo la variables i que es la va a estar en el loop y el array vacio ddonde se van a guardar los carros 
var i = 0;
var listaAutos = [];

//hacemos un ciclo while para ir agregando de nuestra listas de arrays y crear nuestros carros(objeto)
while(i < marcas.length && i < modelos.length && i < año.length){
    var newCar = new auto(marcas[i], modelos[i], año[i]);
    listaAutos.push(newCar);
    i++;
}
// al final un console.log para ver si se guardaron bien los carros 
console.log(listaAutos) //(la lista de los autos cada auto queda con el nombre de la funcion contrcutora en este caso "auto")


// // se crea un array donde van a estar los obejtos osea los carros con sus caracteristicas
// var autos = [];
// // creo una variable que va a ser mi i para iterar en el loop pero sera una pregunta para el usuario 
// var autosIngresados = 0;

// // funtion constructora de los autos(obejtos) 
// function auto(marca,modelo,annio){
//     this.marca = marca,
//     this.modelo = modelo,
//     this.annio = annio
// }
// // creo una variable y le pregunto cuantos autos desea agregar para tener el tope de las vueltas que va a dar el loop 
// var cantidadAutos = prompt("¿Cuantos carros desea agregar");

// // se crea un loop con while para el ingreso de cada auto(objeto)
// while ( autosIngresados < cantidadAutos) {
//     //se hace la pregunta a la persona y se guarda el valor para despues usarlo en la funtion constructora 
//     let marca = prompt("Marca: ");
//     let modelo = prompt("Modelo: ");
//     let annio = prompt("Año: ");

//     var autoNuevo = new auto(marca,modelo,annio);

//     //se hace unshift para agregar el nuevo auto al inicio de nuestro array donde estaran nuestro carros 
//     autos.unshift(autoNuevo);

//     //se le suma un 1 al los autos ingresados 
//     autosIngresados++;
// }
// // esto hace un console.log a todo los autos ingresados para poderlos ver en consola 
// for (i = 0; i < autos.length; i++) {
//     console.log(autos[i]);
// }