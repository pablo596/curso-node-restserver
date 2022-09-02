const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = 'No name', apiKey } = req.query;
  res.json({ msg: 'get API - controlador', q, nombre, apiKey });
};
const usuariosPut = (req = request, res = response) => {
  const id = req.params.id;

  res.json({ msg: 'put API - usuariosPut', id });
};

const usuariosPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.json({ msg: 'post API - usuariosPost', nombre, edad });
};
const usuariosDelete = (req = request, res = response) => {
  res.json({ msg: 'delete  API - usuariosDelete' });
};

const usuariosPatch = (req = request, res = response) => {
  res.json({ msg: 'patch  API - usuariosPatch' });
};
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
