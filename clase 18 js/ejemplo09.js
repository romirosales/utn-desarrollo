const alumnos= [
    {
        nombre: 'pablo',
        edad: '8'
    },
    {
        nombre: 'martin',
        edad: '7'
    },
    {
        nombre: 'ignacio',
        edad: '9'
    },
    {
        nombre: 'juan',
        edad: '3'
    },
    {
        nombre: 'mario',
        edad: '10'
    }
]

const mayordeEdad = alumnos.filter(alumno =>alumno.edad >=4)
console.log(mayordeEdad);
    