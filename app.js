const mongoose = require('mongoose');
const env = require('dotenv').config();
const express = require('express');
const app = express();
const tasksRoutes = require("./routes/tasksRouter.js");
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use("/tasks", tasksRoutes);

app.get('/', 
	(req, res) => res.send('¡Hola nodemon!')
);

app.listen(PORT, (err, res) => {
    mongoose.connect(process.env.MONGOCONNECTION);
    console.log("Arranco el server");
});

