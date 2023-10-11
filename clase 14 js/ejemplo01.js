mes = parseInt(prompt('ingrese un mes en numero', ''));

if (mes==1 || mes==2 || mes==3){
    document.write('corresponde al primer trimenstre del año')
}else if (mes==4 || mes==5 || mes==6){
    document.write('es el segundo trimestre del año')
}else if( mes==7 || mes==8 || mes==9){
    document.write('es el tercer trimestre del año')
}else {
document.write('es el cuarto trimestre')
}

   