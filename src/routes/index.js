const express = require('express')
const pacientesController = require('../controllers/pacientesController')
const routes = express.Router()

routes.get('/pacientes', pacientesController.listarPacientes)
routes.get('/pacientes/:id', pacientesController.listarPacientesId)
routes.post('/pacientes', pacientesController.cadastrarPacientes)
routes.put('/pacientes/:id', pacientesController.atualizarPacientes)
routes.delete('/pacientes/:id', pacientesController.deletarPacientes)

module.exports = routes
