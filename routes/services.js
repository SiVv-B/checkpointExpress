const express = require('express')
const router = express.Router()
const services = require('../services')

//get all the services
router.get('/service', (req, res) => {
  console.log('service is here')
  res.json(services)
})
//get one service
router.get('/service/:id', (req, res) => {
  let listServices = res.json(
    services.filter((service) => service.id === parseInt(req.params.id)),
  )
  if (services.length === 0) {
    res.json({
      msg: 'This service does not exist. please selcet an id between 1 and 3.',
    })
  } else {
    res.json(listServices)
  }
})

  //delete one service
  router.delete('/service/:id', (req, res) => {
    let listServices = res.json(
        services.filter((service) => service.id !== parseInt(req.params.id)))
        res.json(listServices)
    })

    //Add new service
    router.post('/service', (req,res)=>{
        res.json(services.concat(req.body))
    })

    
        //Edit service
        router.put('/service/:id', (req,res)=>{
            res.json(services.map(el => el.id === parseInt(req.params.id)? req.body : el))
        })
    



module.exports= router