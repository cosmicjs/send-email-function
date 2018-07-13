const event = {
  body: '{\
    "to": "spirony@gmail.com",\
    "from": "spirony+1@gmail.com",\
    "subject": "This is a test",\
    "text_body": "heya",\
    "html_body": "<h1>YO</h1>"\
  }'
}
const handler = require('./handler.js')
handler.sendEmail(event, '', function(err, res) {
  console.log(err, res)
})