const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentDB').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});


const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phone:{
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);