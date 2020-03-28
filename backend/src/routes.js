const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



const connection = require('./database/connection');

const routes = express.Router();

//CONTROLE DO LOGIN
routes.post('/sessions',SessionController.create);

//SELECT * ONGS
routes.get('/ongs', OngController.index);
//CADASTRA UMA ONG
routes.post('/ongs', OngController.create);

//SELECT CASOS DE UMA ONG ESPECIFICA
routes.get('/profile',ProfileController.index);

//SELECT * INCIDENTS
routes.get('/incidents', IncidentController.index);
//CADASTRA UM INCIDENT
routes.post('/incidents', IncidentController.create);
//DELETA UM INCIDENT
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes