const empleados = [
    {
        nombre: 'romina',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'maria',
        trabajo: 'abogado'
    },

    {
        nombre: 'fernanda',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'pablo',
        trabajo: 'maestro'
    },
    {
        nombre: 'juan',
        trabajo: 'desarrollador'
    },
]
console.log(empleados.trabajo == 'desarrollador');
//console.log(empleados.sort(buscar=>buscar.empleados));
console.log (empleados.find(buscar=>buscar.trabajo='desarrollador'));
console.log (empleados.filter(buscar=>buscar.trabajo=='desarrollador'));

const nodesarr= empleados.filter((buscar=>buscar.trabajo !== 'desarrollador'));
console.log(nodesarr);

