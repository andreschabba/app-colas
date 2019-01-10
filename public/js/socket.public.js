var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblDesk1 = $('#lblEscritorio1');
var lblDesk2 = $('#lblEscritorio2');
var lblDesk3 = $('#lblEscritorio3');
var lblDesk4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblDesks = [lblDesk1, lblDesk2, lblDesk3, lblDesk4];

socket.on('status', function(data) {
    updateHTML(data.lastFour);
});

socket.on('lastFour', function(data) {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    updateHTML(data.lastFour);
})

function updateHTML(lastFour) {
    for (var i = 0; i <= lastFour.length - 1; i++) {
        lblTickets[i].text('Ticket ' + lastFour[i].number);
        lblDesks[i].text('Escritorio ' + lastFour[i].desk);
    }
}