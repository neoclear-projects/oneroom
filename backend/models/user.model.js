"use strict";

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Defined user schema
const UserSchema = new Schema({
  username: {
    type: String,
    uniqye: true
  },
  salt: String,
  saltedHash: String,
});

module.exports = mongoose.model('User', UserSchema);
