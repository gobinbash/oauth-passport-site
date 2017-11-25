const mongoose = require('mongoose')
require('dotenv').config()

const app = require('./app')

// Mongoose connection 😄

const db = mongoose.connect('mongodb://127.0.0.1:27017/oauth-test',{ useMongoClient: true})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('▶️ MongoDb Connected 🙂')
});



app.listen(3000, () => {
    console.log('▶️ App running at port 3000 😸')
})


