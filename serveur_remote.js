const express = require('express');
//dépendance api express
const app = express();
const http = require('http');
const server = http.createServer(app);

//Instanciate io requirements
const {Server} = require("socket.io")
const io = new Server(server)

//Constants 
const PORT = 8080
const HOST = '0.0.0.0';


app.use( express.static( "public" ));
app.set( "view engine", "ejs" );
app.set( 'views', './views' );

app.get('/maze', (req, res)=>{
    res.render('chocobo_move')
});

io.on( "connection", ( socket ) => {
    //on affiche dans la console
    console.log("Connection au chocobo");
    socket.on('moveDown', () => {
        console.log('Bouge en bas') ;
        io.emit('chocoboDown') ;
    })
    socket.on('moveUp', () => {
        console.log('Bouge en haut') ;
        io.emit('chocoboUp') ;
    })
    socket.on('moveRight', () => {
        console.log('Bouge à droite') ;
        io.emit('chocoboRight') ;
    })
    socket.on('moveLeft', () => {
        console.log('Bouge à gauche') ;
        io.emit('chocoboLeft') ;
    })
})

server.listen( PORT, HOST );
console.log( `Normalement si ça marche t'es connecté sur http://${HOST}:${PORT}`);