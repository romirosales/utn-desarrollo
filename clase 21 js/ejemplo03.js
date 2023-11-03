let numeros= [43,5,1,50,96];
numeros.sort(function (a,b) {
   
    if (a>b) return (-1);
    return 0;
})
document.write(numeros)

////////////////////////////////

let numero= [5,20,7,31];

let mayor=0;

for(let i= 0; i< numero.length ; i++){
    if (numero[i]> mayor){
        //mayor=numero[i];
    }
}
document.write('el numeor mayor es ' + mayor);

/////////////////////////////////////////

let array = [];
const cuantos = 5;
let mayor = 0;

while (array.length < cuantos) {
    array[array.length] = parseInt(prompt(`Ingrese el valor ${array.length + 1}  de ${cuantos}:`, ''));
}

for (let i = 0; i < array.length; i++) {
   if (array[i] > mayor) {
       mayor = array[i];
   }
}

document.write(mayor);
//////////////////////////////

