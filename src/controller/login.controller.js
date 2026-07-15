const jwt = require("jsonwebtoken");
const studentModel = require("../models/student.model");

async function loginStudent(req, res) {
  const student = req.body;
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currStd = await studentModel.findById(decoded.id);
    console.log(currStd)
  } catch (error) {
    return res.status(401).json({
      message: "Token is invalid",
    });
  }

  res.status(200).json({
    message: "Student Login"
  });
}

module.exports = { loginStudent };
