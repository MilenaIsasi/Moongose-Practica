const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	edad: Number
});

//User es el que creamos, usuarios es el que se guarda en moongose
const User = mongoose.model("usuarios", UserSchema);

module.exports = User;
