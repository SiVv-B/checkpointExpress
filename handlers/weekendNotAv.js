module.exports = () => {
  console.log('bye world')
  app.get('/now', (req, send) => {
    req.send('sorry the website is available pn week days from 9am to 7pm')
  })
}
