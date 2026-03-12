const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:mxMBRuna8egofOJI@cluster0.mwfhawk.mongodb.net/studentDB?retryWrites=true&w=majority")
.then(() => {
  console.log("MongoDB connected");
})
.catch((error) => {
  console.log("MongoDB connection error:", error);
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