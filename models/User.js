const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  googleId: String,
  email: String
})


const User = mongoose.model('user', userSchema)

module.exports = User
