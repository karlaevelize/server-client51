const express = require("express")
const data = require("./data.json")

const app = express()

const port = 4000

//Send Hello
app.get("/", (request, response) => {
  response.send("Hello")
  console.log(request.method)
})

//Send an array of students
app.get("/students", (request, response) => {
  response.send(data.students)
})

//Send an array of professors
app.get("/professors", (request, response) => {
  response.send(data.professors)
})

//Send a student by id
app.get("/student/:id", (request, response) => {
  const id = request.params.id
  console.log(typeof(id))
  const studentById = data.students.find(student => student.id === parseInt(id) )
  response.send(studentById)
})

//Send students by house
app.get("/house/:name", (request, response) => {
  const name = request.params.name
  const studentByHouse = data.students.filter(student => student.house.toLowerCase() === name.toLowerCase())
  response.send(studentByHouse)
})

app.listen(port, () => console.log(`Listening on ${port}`))