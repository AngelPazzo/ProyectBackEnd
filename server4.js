const app = require(`./app.js`);
const PORT = process.env.PORT || 3003;

app.listen (PORT, ()=> {
    console.log (`Server up and running on port ${PORT}`);
});
