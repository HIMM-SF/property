// Mongoose connection
const mongoose = require('mongoose');

const db = 'mongodb://mongo:27017/Profiles' ;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => console.log('connected to ' + db + ' ...'))
  .catch(() => console.log(`Unable to connect to ${db}...`));

module.exports = mongoose;