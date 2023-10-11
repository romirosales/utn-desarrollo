const nombre = prompt('ingrese su nombre');
const nota= parseInt(prompt('ingrese su nota', ''))

if(Number.isNaN(nota)){
   document.write('la nota ingresada no es válida')
}else if(nota >=4){
    document.write(`${nombre} estas aprobado con ${nota}`)
}else (document.write(`${nombre} estas desaprobado con ${nota}`))
/*Number.isNaN es para verifica que el dato es numerico*/