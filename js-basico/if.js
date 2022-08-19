

var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";
var user;

function game (user){

    if (user == op1){
        console.log("empate")
    }
    else if (user == op2){
        console.log("ganaste")
    }
    else if(user == op3 ){
        console.log("perdiste")
    }
    else{
        console.log("ingresa piedra papel o tijera")
    }
}

game("piedra")

function game2 (user, cpu){
    if (user == cpu){
        
    }
}
