const { model, Schema } = require('mongoose')

const invitadoSchema = new Schema(
  {
    name: String,
    email: String,
    lastname: String,
    fecha: Number
  },
  {
    timestamps: true
  }
)

module.exports = model('Invitado', studentSchema)
