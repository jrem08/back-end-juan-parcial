const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; 
const users = require('./data/users');

app.use(cors()); 
app.use(express.json());

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;

    if (!newUser.name || !newUser.phone || !newUser.email || !newUser.address || !newUser.age || !newUser.photoUrl) {
        return res.status(400).json({ messaje: "Todos los campos son abligartorios" });
    }

    users.unshift(newUser);
    res.status(201).json({ messaje: "Usuario agregado correctamente", users});
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});