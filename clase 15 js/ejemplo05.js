const items = document.getElementsByClassName('item');
function cambiarVisibilidad(numItem) {
    const item= items[numItem];
    if(item.style.visibility==''){ // quiere decir si lo tiene aplicado o no//
        item.style.visibility= 'hidden'; // aca lo asigna//

    }else {
        item.style.visibility='';
    }
}

function cambiarDisplay(numItem) {
    const item =items[numItem];

    if(item.style.display==''){ 
        item.style.display= 'none'; 

    }else {
        item.style.display='';
    }
}