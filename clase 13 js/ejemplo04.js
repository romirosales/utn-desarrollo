const num1= parseInt(prompt('ingrese un numero', ''));/*15*/
const num2= parseInt(prompt('ingrese un numero', ''));/*12*/
const num3= parseInt(prompt('ingrese un numero', ''));/*13*/

if (num1 > num2 && num1 >num3){
    console.log(`el numero mayor es ${num1}`);/*siempre debe ir comilla inversa*/
}else if(num2 > num3){
    console.log(`el numero mayor es ${num2}`);
}else{
    console.log(`el numero mayor es ${num3}`);
}
