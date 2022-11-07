 const app = require(`./app.js`);
 const PORT = process.env.PORT || 3003;

app.listen (PORT, ()=> {
     console.log (`Server up and running on port ${PORT}`);
 });

// const express = require('express');
// const {Server: HttpServer} = require('http');
// const {Server: IoServer} = require('socket.io');
// require ('dotenv').config();

// const messages = [];

// const app = express();
// const http = new HttpServer(app);
// const io = new IoServer(http);

// app.use(express.static('public'));

// app.get("/health", (_req, res) => {
//     res.status(200).json({
//         success: true,
//         environment: process.env.ENVIRONMENT || "undefined",
//         health: "OK"
//     })
// }
// );


// const PORT = process.env.PORT || 3003;

// http.listen(PORT, () => {
//     console.log(`Server up and running on port ${PORT}`);
// });


