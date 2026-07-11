const express = require('express')

const app = express()
app.use(express.json())

const students = []

app.post('/students',(req, res) => {
    students.push(req.body)
    console.log(students)

    res.status(201).json({
        message: "Success"
    })
})

app.get('/students', (req, res) => {
    res.status(200).json({
        message: "All students",
        students: students
    })
    
})

app.delete('/students/:index', (req, res) => {
    const index = req.params.index

    delete students [index]

    res.status(200).json({
        message: "student deleted"
    })
})

app.patch('/students/:index', (req, res) => {
    const index = req.params.index

    const name  = req.body.name
    const rollno = req.body.rollno

    students[index].name = name
    students[index].rollno = rollno

    res.status(200).json({
        message: "Update Successfully"
    })
})
module.exports = app