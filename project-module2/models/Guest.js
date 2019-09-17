const { model, Schema } = require('mongoose')

const guestSchema = new Schema(
  {
    name: String,
    email: String,
    lastname: String,
    date: {
      type: Date,
      default: Date.now()
    },
    code: {
      type:String,
      unique:true
    }
    host:{
      
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Guest', guestSchema)
