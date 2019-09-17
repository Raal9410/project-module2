const { model, Schema } = require('mongoose')

const guestSchema = new Schema(
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

module.exports = model('Guest', guestSchema)
