const app = require('express')()
const handler = require('./index').handler
const routes = require('./function').routes
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000
routes.forEach(route => {
  if (route.method === 'get' || route.method === 'options') {
    app.get('/' + route.path, (req, res) => {
      const event = {
        body: JSON.stringify(req.body)
      }
      handler(event, null, (err, response) => {
        res.send(response.body)
      })
    })
  }
  if (route.method === 'post') {
    app.post('/' + route.path, (req, res) => {
      const event = {
        body: JSON.stringify(req.body)
      }
      handler(event, null, (err, response) => {
        res.send(response.body)
      })
    })
  }
  if (route.method === 'put') {
    app.put('/' + route.path, (req, res) => {
      const event = {
        body: JSON.stringify(req.body)
      }
      handler(event, null, (err, response) => {
        res.send(response.body)
      })
    })
  }
  if (route.method === 'delete') {
    app.del('/' + route.path, (req, res) => {
      const event = {
        body: JSON.stringify(req.body)
      }
      handler(event, null, (err, response) => {
        res.send(response.body)
      })
    })
  }
})
app.listen(PORT)
console.log(`Listening on port ${PORT}`)