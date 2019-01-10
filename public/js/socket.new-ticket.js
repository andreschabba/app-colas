var socket = io();
var label = $('#lblNuevoTicket');
//lado del usuario
socket.on('connect', function() {
    console.log("Conectado al servidor");
});
//.on => escuchar
socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor');
});

$('button').on('click', function() {
    socket.emit('nextTicket', null, function(nextTicket) {
        label.text(nextTicket)
    });
});

socket.on('status', (data) => label.text(data.status));