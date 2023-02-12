const User = require("../models/usuarios.models");

const listarUsuarios = async (req, res)=>{
    const usuarios = await User.find();
    res.json({usuarios})
}

const crearUsuario = async (req, res)=>{
try{
    const usuarioCreado = await User.create(req.body);
    res.json( { resultado: 'ok' , usuario_nuevo: usuarioCreado} );
} catch(error){
    res.json(error);
}
}


const actualizarUsuario = async (req, res)=>{
    const usuarioActualizado = await User.findOneAndUpdate({_id: req.params.id}, req.body ,{new: true})
    res.json( { resultado: 'ok' , usuario: usuarioActualizado , parametro: req.params.id} )

}

const eliminarUsuario = async (req, res)=>{
    const usuarioEliminado = await User.deleteOne({_id: req.params.id})
    res.json( { resultado: 'ok' , usuario: usuarioEliminado , parametro: req.params.id} )
}

const encontraUsuario = async (req, res)=>{
    const usuarioEncontrado = await User.findOne({_id: req.params.id})
    res.json( { resultado: 'ok' , usuario: usuarioEncontrado , parametro: req.params.id} )
}

module.exports = {
    listarUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    encontraUsuario,
}