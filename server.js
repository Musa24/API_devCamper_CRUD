const express = require('express');
const connectDB = require('./config/dbConnect');
require('dotenv').config({ path: 'config/config.env' });
const app = express();
//Routes files
const bootcamps = require('./routes/bootcamps');

//middleware
app.use(express.json());

//router middleware
app.use('/api/v1/bootcamps', bootcamps);

// Connect to the database
connectDB()
  .then(() => {
    console.log('THE DATABASE IS CONNECTED');
  })
  .catch((err) => {
    console.log(err);
  });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
