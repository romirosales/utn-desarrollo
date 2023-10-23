const alternar = document.getElementsByClassName('alternar')[0];
console.log(alternar);

alternar.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('activo')
})
//classList > representa la lista de clases asignadas a un elemento. togggle > cambio por ejemplo  "prender"o "apagar"
// add o remover
