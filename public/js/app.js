var socket = io();

socket.on('connect', function () {
	console.log('Conneted to socket.io server!');
})