const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  college: { type: String, required: true },
  degree: { type: String, required: true },
  resumeUrl: { type: String, required: true }, 
});

module.exports = mongoose.model('Resume', resumeSchema);