'use strict';
module.exports.handler = (event, context, callback) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const body = JSON.parse(event.body)
  const to = body.to;
  const from = body.from;
  const subject = body.subject;
  const html_body = body.html_body;
  const text_body = body.text_body;
  const msg = {
    to: to,
    from: from,
    subject: subject,
    text: text_body,
    html: html_body
  };
  sgMail.send(msg).then(data => {
    // Celebrate
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      },
      body: JSON.stringify({
        data: data
      })
    };
    callback(null, response);
  })
  .catch(error => {
    // Log friendly error
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      },
      body: JSON.stringify(error)
    };
    callback(null, response);
  });
};