function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var idItem = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(idItem));
    $("#" + ev.target.id).addClass('animated flip');
}