const formu= document.getElementById('formulario');
formu.addEventListener('submit', function (e) {
    e.preventDefault();

    if(e.currentTarget.nombre.value ==''){
        alert('el campo nombre es requerido');
        return;
    }

    if(e.currentTarget.comentarios.value ==''){
        alert ('el campo comentarios es requerido');
        return;
    }
    alert (`gracias ${e.currentTarget.nombre.value} por enviar el ${e.currentTarget.comentarios.value}. `)
})