const distancia =parseInt(prompt('ingrese una distancia en metros para determinar el transporte'));

if(Number.isNaN(distancia)){
    document.write('ingrese en numeros');
} else if( distancia <= 1000){
    document.write('dedes ir a pie');
}else if( distancia > 1000 && distancia <=10000 ){
    document.write('dedes ir en bicicleta');
}else if( distancia > 10000 && distancia <= 30000){
    document.write('dedes ir a colectivo');
}else if( distancia >30000 && distancia <=100000){
    document.write('dedes ir a auto')
}else {
    document.write('dedes ir en avion')
}
    
////////////// otra forma de pedir lo mismo pero con funcion

function determinarMedioDeTransporte(distancia2) {
    if (distancia2 >= 0 && distancia2 <= 1000) {
        return "A pie";
    } else if (distancia2 > 1000 && distancia2 <= 10000) {
        return "En bicicleta";
    } else if (distancia2 > 10000 && distancia2 <= 30000) {
        return "En colectivo";
    } else if (distancia2 > 30000 && distancia2 <= 100000) {
        return "En auto";
    } else {
        return "En avión";
    }
}
/////////////
const distancia2 = prompt("Ingrese la distancia en metros: "); 

const medioDeTransporte = determinarMedioDeTransporte(parseFloat(distancia2));

document.write(`Para ${distancia2} metros, el medio de transporte apropiado es: ${medioDeTransporte}`);