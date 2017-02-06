function dropSelector(event) {
    event.preventDefault();

    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById((event.target.id));

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destDraggable = destElement.draggable;
    originDraggable = originElement.draggable;

    destElement.src = originSrc;
    originElement.src = destSrc;

    destElement.draggable = originDraggable;
    originElement.draggable = destDraggable;
}