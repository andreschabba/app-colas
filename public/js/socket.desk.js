var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('Desk is necessary');
}

var desk = searchParams.get('escritorio');
var label = $('small');

$('h1').text('Escritorio ' + desk);

$('button').on('click', function() {
    socket.emit('attendTicket', { desk }, function(res) {
        if (res === 'No tickets') {
            label.text(res)
            alert(res);
            return;
        }
        label.text('Ticket ' + res.number);
    });
})