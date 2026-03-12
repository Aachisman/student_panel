const express = require('express');
const app = express();
const Student = require('./models/student.model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('login');
});

app.get('/dashboard', (req,res)=>{
  res.render('dashboard');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123%34') {
     res.redirect('/dashboard')
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/students', async(req, res)=>{
  let students = await Student.find();
  res.render('students', { students });
});

app.post('/students', async(req, res)=>{
  const { name, email, phone, course, gender, age } = req.body;
  const student = new Student({ name, email, phone, course, gender, age });
  await student.save();
  res.redirect('/students');
});



app.put('/update/:id', async(req, res) => {
  try{
    const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,req.body,{ new: true })
    res.json({
       message: "Student updated successfully",student: updatedStudent})
  }catch(error){
    res.status(500).json({
    message: "Error updating student"})
  }
});

app.get('/edit/:id', async (req,res)=>{
const student = await Student.findById(req.params.id)
res.render('edit',{ student })
})

app.delete('/delete/:id',async(req,res)=>{
  try{
   await Student.findByIdAndDelete(req.params.id)
   res.json({message: "Student deleted successfully"})
  }catch(error){
    res.status(500).json({
    message: "Error deleting student"
})
}
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
