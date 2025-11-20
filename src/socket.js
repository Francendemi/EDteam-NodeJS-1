module.exports = (io) => {
    // Manejar la conexión de nuevos clientes
    io.on('connection', (socket) => {
        console.log('Se ha conectado un nuevo cliente al servidor');
        
        socket.broadcast.emit('new-connection', "Nuevo cliente conectado: "  + new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear());

        // Escuchar el evento 'add-information' enviado por el cliente
        socket.on('add-information', (data) => {
            console.log(data);
            io.emit('show-information', data);
        });

        // Manejar la desconexión del cliente
        socket.on('disconnect', () => {
            console.log('El cliente se ha desconectado del servidor: ' + new Date() );
        })
    })
}