const express = require('express');
const indexRouter = require(`./src/routes/index`);
const errorHandlers = require(`./src/middlewares/errorHandlers`);
const {Server: HttpServer} = require('http');
const {Server: IoServer} = require('socket.io');
require (`dotenv`).config();


const app = express();
// const ProductsService = require(`./src/services/products.services.js`);


app.use (express.json());
app.use (express.urlencoded({extended: true}));
app.use (`/`, indexRouter);
app.use (`/public`, express.static(__dirname + "/public/form/"));
app.set ("view engine", "ejs");
app.set ("views", __dirname + "/views/pages");

const messages = [];

const http = new HttpServer(app);

const io = new IoServer(http);

app.use(express.static(__dirname + "/public"));

app.use("/api", indexRouter);

app.use(errorHandlers);
// app.get("/", (_req, res) => {
//     res.sendFile(__dirname + "/public/form/index.html");
// });

io.on ("connection", (socket) => {
    console.info (`Client connected [id=${socket.id}]`);
    socket.emit ("messages", messages);
    socket.on ("new-message", (data) => {
        messages.push (data);
        io.sockets.emit ("messages", data);
    });
});

module.exports = http;







// app.get ("/health", (_req, res) => {
//     res.status (200).json({
//         success: true,
//         environment: process.env.ENVIRONMENT || "undefined",
//         health : "OK"
//     })
// });



 

 

module.exports = app;