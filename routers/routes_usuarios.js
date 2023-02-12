const express = require("express");
const {  listarUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario, encontraUsuario } = require("../controllers/usuario");
const User = require("../models/usuarios.models");
const app = express();

app.get("/api/usuarios/", listarUsuarios);

app.post("/api/usuarios/", crearUsuario)

app.put("/api/usuarios/:id", actualizarUsuario)

app.delete("/api/usuarios/:id", eliminarUsuario)

app.get("/api/usuarios/:id", encontraUsuario)


module.exports = app;