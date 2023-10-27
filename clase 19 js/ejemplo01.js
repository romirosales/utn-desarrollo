function getDiasPorMes(mes) {
    
    if (Number.isNaN(mes)) return false;// si o si sea numero
    if (Number.isNaNmes < 1 || mes >12) return false; // numeros entrre 1 y 12
    //(meses del año)
    mes -- // para que reste un indice ya que comienza en el 0 y el usurio coloque directamente el numero de mes que necesita

    const data= [
        {
            nombre: 'enero',
            dias: 31
        },
        {
            nombre: 'febrero',
            dias: 28
        },
        {
            nombre: 'marzo',
            dias: 30
        },

        {
            nombre: 'abril',
            dias: 30
        },
        {
            nombre: 'mayo',
            dias: 31
        },
        {
            nombre: 'junio',
            dias: 30
        },
        {
            nombre: 'julio',
            dias: 31
        },
        {
            nombre: 'agosto',
            dias: 31
        },
        {
            nombre: 'setiembre',
            dias: 30
        },
        {
            nombre: 'octubre',
            dias: 31
        },
        {
            nombre: 'noviembre',
            dias: 30
        },
        {
            nombre: 'enero',
            dias: 31
        },
        {
            nombre: 'diciembre',
            dias: 31
        }
        
    ]
    return data [mes];

}

const numMes = parseInt(prompt('ingrese mes del año'));
const resultado = getDiasPorMes(numMes);
 if(resultado ){
    alert (`el mes ${resultado.nombre} tiene ${resultado.dias}`)
 }else {
    alert ('numero de mes invalido')
 }



