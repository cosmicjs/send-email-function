const event = {
  body: '{\
    "to": "spirony@gmail.com",\
    "from": "spirony+1@gmail.com",\
    "subject": "This is a test",\
    "text_body": "heya",\
    "html_body": "<h1>YO</h1>"\
  }'
}
const index = require('./index.js')
index.handler(event, '', function(err, res) {
  console.log(err, res)
})