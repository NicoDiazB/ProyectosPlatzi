

var op1 = "piedra";
var op2 = "tijera";
var op3 = "papel";

var user;

function game(user){

    switch (user){
        case op1: 
            console.log("empate")
            break
        case op2: 
            console.log("perdiste")
            break
        case op3: 
            console.log("ganaste")
            break
        default:
            console.log("coloca piedra papel o tijera")
    
    }
}


// OPERADOR TERNARIO

condition ? true : false;

//ej 
var numero = 1;

var resultado = numero  === 1 ? "si soy un uno" : "no soy un uno"
