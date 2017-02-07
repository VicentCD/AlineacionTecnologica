var Stadium = new Stadium(6);

function Stadium(posiciones) {
    this.posiciones = posiciones;
}

function comprobarAlineacionCompleta() {
    var contador = 0;
    for (i = 0; i < 6; i++) {
        imagen = document.getElementsByClassName("dropItem")[i].firstChild;
        estadoImagen = imagen.getAttribute("estado");
        if (estadoImagen === "true") {
            contador++;
        }
        if (contador === 6) {
            finalAlineacion();
        }
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

//Stadium.prototype.comprobacionDropCampo = function (posicion) {
//    var colocacion = false;
//    if ($('#' + posicion).find("img").length === 0) {
//        colocacion = true;
//    } else {
//        colocacion = false;
//    }
//    return colocacion;
//};


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

    destEstado = $('#' + destElement.id).attr("estado");
    originEstado = $('#' + originElement.id).attr("estado");

    //Changes

    destElement.src = originSrc;
    originElement.src = destSrc;
    $("#" + event.currentTarget.id).addClass('animated flip');

    destElement.draggable = originDraggable;
    originElement.draggable = destDraggable;

    $('#' + originElement.id).addClass(destClass);

    $('#' + originElement.id).attr("estado", destEstado);
    $('#' + destElement.id).attr("estado", originEstado);

    comprobarAlineacionCompleta();
}