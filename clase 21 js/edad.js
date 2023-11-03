const edad = parseInt(prompt('ingrese su edad', ''));

if (Number.isNaN(edad )) {
    document.write('ingrese un numero');
}else if(edad>=18){
    document.write('permitido');/}else{
   document.write('es menor')
}


