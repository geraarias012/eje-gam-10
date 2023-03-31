const express = require ("express");
const app = express ()

app.use(express.static('public'))

/*app.get ("/", (reg, res) => {
    res.send();
});*/
app.get ("*", (reg, res) => {
    res.sendFile(__dirname+'/public/404.html');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console. log(`El servidor está corriendo en el puerto http://localhost: ${port}`);
});