const express = require('express')
const auth = require('../middlewares/auth')
const pacientesController = require('../controllers/pacientesController')
const atendimentoController = require('../controllers/atendimentoControllers')
const routes = express.Router()

routes.get('/pacientes', pacientesController.listarPacientes)
routes.get('/pacientes/:id', pacientesController.listarPacientesId)
routes.post('/pacientes', pacientesController.cadastrarPacientes)
routes.put('/pacientes/:id', pacientesController.atualizarPacientes)
routes.delete('/pacientes/:id', pacientesController.deletarPacientes)

routes.get('/atendimentos', atendimentoController.listarAtendimentos)
routes.get('/atendimentos/:id', atendimentoController.listarUmAtendimento)
routes.post('/atendimentos', atendimentoController.cadastrarAtendimento)

module.exports = routes
