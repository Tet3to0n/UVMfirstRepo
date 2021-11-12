let a = 7;
let b = 1000;
let c = 15;

let contador = 0;

if (a + b > c) {
    //console.log ("si lo es")
    contador++;
}
if (a + c > b){
    //console.log("si lo es")
    contador++;
}
if (b + c > a){
    //console.log("si lo es")
    contador++;
}
//console.log(contador);

if (contador = 3){
   console.log("el triangulo si existe");
} else{
    console.log("El triangulo no existe");
}