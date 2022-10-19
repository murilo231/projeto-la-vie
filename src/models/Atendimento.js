const db = require('../database/db')
const { DataTypes } = require('sequelize')

const Atendimentos = db.define(
  'Atendimentos',
  {
    atendimento_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    data_atendimento: {
      type: DataTypes.DATE
    },
    observacao: {
      type: DataTypes.STRING
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: 'id'
      }
    }
  },
  {
    tableName: 'atendimento'
  }
)

module.exports = Atendimentos
