function dropSelector(event) {
    event.preventDefault();

    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById((event.target.id));

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destDraggable = destElement.draggable;
    originDraggable = originElement.draggable;

    destEstado = $('#' + destElement.id).attr("estado");
    originEstado = $('#' + originElement.id).attr("estado");

    destElement.src = originSrc;
    originElement.src = destSrc;

    destElement.draggable = originDraggable;
    originElement.draggable = destDraggable;
    
    $('#' + originElement.id).attr("estado", destEstado);
    $('#' + destElement.id).attr("estado", originEstado);
}