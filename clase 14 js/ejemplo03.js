const valor = parseInt(prompt('ingrese un valor entre 1 y 5', ''));

switch(valor){
    case 1:
        document.write('soy el numero 1');
        break
    case 2:
        document.write('soy el numero 2');
        break
    case 3:
        document.write('soy el numero 3');
        break
    case 4:
        document.write('soy el numero 4');
        break
    case 5:
        document.write('soy el numero 5');
        break
    default:
        document.write('no ingresaste un numero entre el 1y el 5');
        break;             

}

