const pacientesController = {
  //Listar todos Pacientes
  async listarPacientes(req, res) {
    res.send('Listando todos Pacientes ... Aguarde 1 minuto.')
  },

  //Listar Pacientes por ID
  async listarPacientesId(req, res) {
    const { id } = req.params
    console.log(id)
    res.send(`Listando pacientes que possui ID: ${id}... aguarde outro minuto.`)
  },

  //Cadastrar Pacientes
  async cadastrarPacientes(req, res) {
    console.log(req.body)
    res.json(req.body)
  },

  //Atualizar Pacientes
  async atualizarPacientes(req, res) {
    const { id } = req.params
    res.send(`Informações do paciente com ID: ${id} atualizadas com sucesso!`)
  },

  //Deletar Paciente
  async deletarPacientes(req, res) {
    const { id } = req.params
    res.send(`Informações do paciente com ID: ${id} deletadas com sucesso!`)
  }
}

module.exports = pacientesController
