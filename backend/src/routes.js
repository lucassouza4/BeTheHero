const express = require('express');
const OngControler = require('./controlers/ongControler');
const IncidentControler = require('./controlers/IncidentControler');
const ProfileControler = require('./controlers/ProfileControler');
const LoginControler = require('./controlers/LoginControler');

const routes = express.Router();

// routes ongs =============================
routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

// routes incidents =========================
routes.get('/incidents', IncidentControler.index);
routes.post('/incidents', IncidentControler.create);
routes.delete('/incidents/:id', IncidentControler.delete);

// routes profile ============================
routes.get('/profile', ProfileControler.index);

// routes login ==============================
routes.post('/session', LoginControler.create);

module.exports = routes;