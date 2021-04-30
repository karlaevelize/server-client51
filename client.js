const axios = require("axios")

async function getData(){
  try {
    const response = await axios.get('http://localhost:4000/student/1')
    console.log(response.data)
  } catch (error){
    console.log(error.message)
  }
}

getData()