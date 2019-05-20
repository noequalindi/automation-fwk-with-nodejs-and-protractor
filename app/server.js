const dotenv      = require('dotenv')
const express     = require('express')

const app = express() // return instance of the app

// setting up the dotenv configuration
dotenv.config({

    path: './.env'
  
  })
  
  app.listen(process.env.PORT, (err) => {
  
    if (err) {
        console.log(err); // error handling
        process.exit(1);
    }
  
  console.log(`Server is now running in ${process.env.NODE_ENV} on port ${process.env.PORT}`);
  });