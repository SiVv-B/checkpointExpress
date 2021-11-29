const express= require ('express')
const router = express.Router()
const contact = require('../contact')

//get all the contacts
router.get('/contact', (req, res) => {
    res.json(contact)
  })
  //get one contact
  router.get('/contact/:id', (req, res) => {
    let listContact = res.json(
      contact.filter((contact) => contact.id === parseInt(req.params.id)),
    )
    if (contact.length === 0) {
      res.send(
        'This contact does not exist. please selcet an id between 1 and 3.',
      )
      console.log('contact not found')
    } else {
      res.json(listContact)
    }
  })
  
  //delete one contact
  router.delete('/contact/:id', (req, res) => {
    let listContact = res.json(
      contact.filter((contact) => contact.id !== parseInt(req.params.id)))
        res.json(listContact)
    })

        //Add new contact
        router.post('/contact', (req,res)=>{
            res.json(contact.concat(req.body))
        })

        //Edit contact
        router.put('/contact/:id', (req,res)=>{
            res.json(contact.map(el => el.id === parseInt(req.params.id)? req.body : el))
        })
    



  module.exports= router 