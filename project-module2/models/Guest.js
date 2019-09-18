const { model, Schema } = require('mongoose')

const guestSchema = new Schema(
  {
    name: String,
    email: String,
    lastName: String,
    date: {
      type: Date,
      default: Date.now()
    },
    code: {
      type:String,
      unique:true
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Guest', guestSchema)
