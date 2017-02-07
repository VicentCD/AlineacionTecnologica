function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function finalAlineacion() {
    $('#myModal').modal('show');
    $('#boton-reinicio-pagina').removeClass('hidden');
}