const studentModel = require("../models/student.model");
const jwt = require("jsonwebtoken");

async function registerStudent(req, res) {
  const { name, rollno, city } = req.body;

  const student = await studentModel.create({
    name,
    rollno,
    city,
  });

  const token = jwt.sign(
    {
      id: student._id,
    },
    process.env.JWT_SECRET,
  );

  res.status(201).json({
    message: "Student Register",
    student,
    token,
  });
}

module.exports = { registerStudent };
