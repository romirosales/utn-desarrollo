const datosUsuario = [
    {
        nombre: 'Romina',
        password:'as123'
    },
    {
        nombre: 'Sol',
        password:'sf821'
    },
    {
        nombre: 'Catalina',
        password:'ef895'
    },
    {
        nombre: 'victoria',
        password:'ffffffffff'
    }
]
//const soloPass = datosUsuario.map(function (p) {
    //return p.password
//})

//console.log(soloPass);

//funcion flecha//
const soloPass = datosUsuario.map (p => {
    return p.password;
  })
  console.log(soloPass)

  const soloNombre =datosUsuario.map(p=> {
    return p.nombre})
    console.log(soloNombre)