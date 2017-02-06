var Stadium = new Stadium(6);
var posiciones = 0;

function Stadium(posiciones) {
    this.posiciones = posiciones;
}

function modelToView() {
    if (posiciones === 6) {
        alert("Alineación Completada");
        $("#reinicio-pagina").removeClass('hidden');
    }
}

//Cambiar a funcion de clase
//function comprobacionDrop(posicion) {
//    var colocacion = false;
//    if ($('#' + posicion).find("img").length === 0) {
//        colocacion = true;
//    } else {
//        colocacion = false;
//    }
//    return colocacion;
//}

Stadium.prototype.comprobacionDropCampo = function (posicion) {
    var colocacion = false;
    if ($('#' + posicion).find("img").length === 0) {
        colocacion = true;
    } else {
        colocacion = false;
    }
    return colocacion;
};


//--------------------------------------------------------------------------------
function dropCampo(event) {
    event.preventDefault();

    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById((event.target.id));

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destDraggable = destElement.draggable;
    originDraggable = originElement.draggable;

    destClass = ($('#' + destElement.id).attr("class"));

    //Changes
    destElement.src = originSrc;
    originElement.src = destSrc;
    $("#" + event.currentTarget.id).addClass('animated flip');

    destElement.draggable = originDraggable;
    originElement.draggable = destDraggable;

    $('#' + originElement.id).addClass(destClass);
}