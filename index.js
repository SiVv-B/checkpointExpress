const express = require('express')
const app = express()
const path = require('path')
const routerService = require ('./routes/services')
const routerContact = require ('./routes/contact') 

const PORT = 5000
//init middleware praser
app.use(express.json())


//Set time condition
const midelware = (req, res, next) => {
  let today = new Date()
  let todayNumber = today.getDay()
  console.log(todayNumber)

  let nowHour = today.getHours()
  console.log(nowHour)

  if ( todayNumber >= 1 && todayNumber<= 5 && nowHour >= 9 && nowHour <= 17) 
    {
    console.log('we are working now from monday to friday')
    next()
  } else {
    console.log('sorry, come back from monday to friday from 9am to 5pm')
  }
}

app.use(midelware)

//import middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', routerService)
 app.use('/', routerContact) 


app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log(`the server is running on the port ${PORT}`)
  }
})
