const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number 
  });

const Users = mongoose.model('Users', UserSchema)
// Users k naam ki collenction banegi

module.exports = Users;
