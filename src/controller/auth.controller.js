const studentModel = require("../models/student.model");
const jwt = require("jsonwebtoken");

async function registerStudent(req, res) {
  const { name, rollno, city } = req.body;

  const isExist = await studentModel.findOne({ rollno });

  if (isExist) {
    return res.status(409).json({
      message: "User already exist",
    });
  }

  const student = await studentModel.create({
    name,
    rollno,
    city,
  });

  const token = jwt.sign(
    {
      _id: student._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "Student Register",
    student,
  });
}

module.exports = { registerStudent };
