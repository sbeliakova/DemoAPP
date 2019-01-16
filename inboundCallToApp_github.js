'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/event', (req, res) => {
    console.log(req.body);
    res.status(200).end();
  });

app.get('/answer', (req, res) => {
    var ncco = [
      {
        action: "talk",
        text: "Thank you for calling Jamie"
      },
      {
        "action": "connect",
        "from": "",
        "endpoint": [
          {
            "type": "app",
            "user": ""
          }
        ]
  
      }
    ];
    res.json(ncco);
  })

  const server = app.listen(3000, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
  });
  