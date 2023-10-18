/*mes = parseInt(prompt('ingrese un mes en numero', ''));

if (mes==1 || mes==2 || mes==3){
    document.write('corresponde al primer trimenstre del año')
}else if (mes==4 || mes==5 || mes==6){
    document.write('es el segundo trimestre del año')
}else if( mes==7 || mes==8 || mes==9){
    document.write('es el tercer trimestre del año')
}else {
document.write('es el cuarto trimestre')
}*/
const mes = prompt('ingrese un mes','');

if (mes==enero || mes==febreo || mes == marzo){
    document.write('primer trimestre')
}else if (mes==abril || mes==mayo || mes==junio){
    document.write('es el segundo trimestre')
}else if (mes==julio || mes==agosto || mes==setiembre){
    document.write('tercero trimestre')
}else('es el resto')

   