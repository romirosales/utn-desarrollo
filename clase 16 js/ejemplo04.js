const parrafo = document.getElementById('parrafo');
const menos= document.getElementById('menos');
const mas= document.getElementById('mas');

//css > font-size le saco el guion y la primera letra va en mayuscula//
menos.addEventListener('click', function name(params) {
    parrafo.style.fontSize = '10px';

})
mas.addEventListener('click', function name(params) {
    parrafo.style.fontSize = '30px';
})
