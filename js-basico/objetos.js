
//Un objeto en programación es una representación abstracta de un objeto en la vida real,
// sin embargo también puede entenderse como un contenedor de datos.

//creemos un obejto

var fidle = {
    vida: 239, 
    mana: 176,
    ap: 89,
    carril: "jungla",
    2011: "años de salida",    
    detallesDelRollySalida: function(){ // a las propiedades que tienen como valor una funcion se les llama metodos de objetos
        console.log(`este es el año de fidle ${this[2011]} y su roll principal es ${this.carril}`) 
    } 
};
// para acceder a cada una da las propiedades hacemos lo siguiente
//nombre del objeto + . + la propiedad que queremos sacar o saber su valor 

fidle.vida;

// otra obcion seria para cuando la propiedad no tenga un nombre con strings si no numeros se hace de esta forma
//nombre del objeto + ["nombre de la propiedad"]

fidle["2011"]
