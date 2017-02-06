var Stadium = new Stadium(6);
var posiciones = 0;

function Stadium(posiciones) {
    this.posiciones = posiciones;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

//function dropCampo(ev) {
//    ev.preventDefault();
//    var idItem = ev.dataTransfer.getData("text");
//
//    if (comprobacionDrop(ev.currentTarget.id) === true) {
//        ev.target.appendChild(document.getElementById(idItem));
//        $("#" + ev.target.id).addClass('animated flip');
//        modelToView();
//    } else {
//        alert("Ya está colocado weey!");
//    }
//}

function modelToView() {
    posiciones++;
    if (posiciones === 6) {
        alert("Alineación Completada");
        $("#reinicio-pagina").removeClass('hidden');
    }
}

//Cambiar a funcion de clase
function comprobacionDrop(posicion) {
    var colocacion = false;
    if ($('#' + posicion).find("img").length === 0) {
        colocacion = true;
    } else {
        colocacion = false;
    }
    return colocacion;
}


//--------------------------------------------------------------------------------

function onDragStartPieza(event) {
    event.dataTransfer.setData("text", getIdPiezaFromElementPieza(event.target));
};
function onDropHuecoCaja(event) {
    event.preventDefault();
    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById(getIdHuecoCajaFromElementCaja(event.target));

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destElement.src = originSrc;
    originElement.src = destSrc;
}
;

function dropCampo(event) {
    event.preventDefault();

    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById((event.target.id));

    var destSrc = destElement.src;
    var originSrc = originElement.src;
    
    alert(destElement.id);
    alert(originElement.id);
    
    destDraggable = destElement.draggable;
    originDraggable = originElement.draggable;
//    alert(destElement.id);
//    alert(originElement.id);
//    alert(destSrc);
//    alert(originSrc);

    destElement.src = originSrc;
    originElement.src = destSrc;
    
    destElement.draggable=originDraggable;
    originDraggable.draggable=destDraggable;
}