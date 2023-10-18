let x = 1;
const cuantos = 5;
let suma = 0;
while(x <= cuantos){
  const valor= parseInt(prompt(`ingrese el valor ${x} de ${cuantos}`,''));
  suma +=valor ;// suma + valor que completa el usuario = seguarda en suma//
  x++
}
//suma =suma + valor es lo mismo que decir suma +=valor//
console.log(`la suma de los valores es ${suma}`);
