const db = require('../database/db')
const { DataTypes } = require('sequelize')
const Paciente = require('./Paciente')

const Atendimentos = db.define(
  'Atendimentos',
  {
    paciente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Paciente,
        key: 'id'
      }
    },
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
    }
  },
  {
    tableName: 'atendimento'
  }
)

module.exports = Atendimentos
