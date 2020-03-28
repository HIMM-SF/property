const express = require('express');
const path = require('path');
const AWS = require('aws-sdk');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const config = require('../config.js');
const db = require('./schema');
const fakeData = require('../dummyData.js');
 
app.use(express.static(path.join(__dirname, '../client', 'public')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/api/rooms/:id', (req, res) => {
//   Room
//     .find({ _id: req.params.id })
//     .then(([ room ]) => {
//       res.json(room);
//     })
//     .catch(err => console.log(err));
// });


// app.get('/api/rooms/', function(req, res) {
//   res.send(fakeData);
// });

app.get('/api/rooms/', function(req, res) {
  db.query((err, data) => {
    if (err) {
      console.log(err)
    } else {
      //var body = JSON.parse(data)
      res.json(data);
    }
  })
});

// app.get('/api/rooms/:id', (req, res) => {
//   const id = req.params;
//   db.findBy
// })

// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: `${config.AWS_ACCESS_KEY_ID}`,
  secretAccessKey: `${config.AWS_SECRET_ACCESS_KEY}`,
});

// create S3 instance
const s3 = new AWS.S3();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});