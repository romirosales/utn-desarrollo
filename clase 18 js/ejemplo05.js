const frutas = ['palta', 'frutilla', 'banana', 'sandia','manzana'];

//console.log(frutas); //imprime el array como está
//console.log(frutas.sort());//imprime por orden alfabetico
//console.log(frutas.sort().reverse());//imprime de Z a la A (alreves)

//-------------------------------------------//

//const numeros = [28,12,57,96,1];
 
//console.log(numeros);
//console.log(numeros.sort());
//console.log(numeros.sort().reverse());

//-----------------------------------------//

const numbers = [4,45,2,5,1,110,3,34];
//menor a mayor
//numbers.sort(function (a,b) {
    //return a-b;
//})

//mayor a menor
numbers.sort(function (a,b) {
    return b-a;
})


console.log(numbers);
console.log(numbers.sort());
console.log(numbers.sort().reverse());


