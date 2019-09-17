const {model, Schema} = require('mongoose')
const PLM = require('passport-local-mongoose')

const studentSchema = new Schema(
 {
   name:String,
   lastName:String,
   email:String,
   course:{
     type: String,
     enum: ['WEBDEV', 'UX', 'DATA'],
     default: 'WEBDEV'
   },
   role: {
    type: String,
    default: 'STUDENT'
   }
},
{
  timestamps:true
}
)

studentSchema.plugin(PLM, {usernameField: 'email'})
module.exports = model('Student', studentSchema)
