const link = document.getElementById('link');

link.addEventListener('click', function (e) {

    //evita el funcionamiento del boton
    e.preventDefault();
    alert ('quisiste ir a: ' + e.currentTarget.href)
});