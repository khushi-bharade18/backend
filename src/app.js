const express = require("express");
const cookieParser = require('cookie-parser')
const studentModel = require("./models/student.model");
const authRoutes = require('./routes/auth.route')
const loginRoutes = require('./routes/login.route')


const app = express();
app.use(express.json());
app.use(cookieParser());

// app.post("/students", async (req, res) => {
//   const data = req.body;
//   await studentModel.create({
//     name: data.name,
//     rollno: data.rollno,
//     city: data.city,
//   });

//   res.status(201).json({
//     message: "Student add successfully",
//   });
// });

// app.get("/students", async (req, res) => {
//   const students = await studentModel.find();

//   res.status(200).json({
//     message: "All students",
//     students: students,
//   });
// });

// app.delete("/students/:id", async (req, res) => {
//   const id = req.params.id;

//   await studentModel.findByIdAndDelete({
//     _id: id,
//   });

//   res.status(200).json({
//     message: "Student deleted",
//   });
// });

// app.patch("/students/:id", async (req, res) => {
//   const id = req.params.id;
//   const data = req.body;

//   await studentModel.findByIdAndUpdate(
//     { _id: id },
//     {
//       ...data,
//       data,
//     },
//   );

//   res.status(200).json({
//     message: "Updated successfully",
//   });
// });


app.use('/api/auth', authRoutes)

app.use('/api/login', loginRoutes)

module.exports = app;
