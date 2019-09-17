const {model, Schema} = require('mongoose')

const studentSchema = new Schema(
 {
   name:String,
   lastName:String,
   email:String,
   course:String
},
{
  timestamps:true
}
)

module.exports = model('Student', studentSchema)
