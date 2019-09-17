const { model, Schema } = require('mongoose')

const guestSchema = new Schema(
  {
    name: String,
    email: String,
    lastname: String,
    person: String,
    date: {
      type: Date,
      default: Date.now()
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Guest', guestSchema)
