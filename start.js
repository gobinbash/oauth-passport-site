const mongoose = require('mongoose')
require('dotenv').config()

const app = require('./app')


mongoose.Promise = global.Promise;

// Mongoose connection 😄
const db = mongoose.connect(process.env.MONGO_DB,{ useMongoClient: true})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('▶️ MongoDb Connected 🙂')
});



app.listen(3000, () => {
    console.log('▶️ App running at port 3000 😸')
})


