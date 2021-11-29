const express = require('express')
const app = express()
const path = require('path')

//the sherlude setting:
const config = require('./config')
const scheduler = require('./scheduler')

const PORT = 8000

//middlewares
app.use(express.json())
scheduler.initCrons(config)
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require ('./routes/services'))
app.use('/', require ('./routes/contact'))

//init middleware praser
app.use(express.json())
/* 
//add a middleware of a navbar in every page
 app.use(navbarMid) 
  function navbarMid (req,res) {
      res.sendFile(path.join(__dirname, 'public','navbar.html'))     
    }    
 */

/* 
//time condition
//get the actual day:
function getTheCurrentTimeString(){
  return new Date().toString();
}

app.get("/now", (req,res,next)=>{
  req.time = getTheCurrentTimeString()
  next()
},
(req,res)=>{
res.json({time: req.time});
}) */


app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log(`the server is running on the port ${PORT}`)
  }
})
