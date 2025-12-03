const dotenv=require ('dotenv').config();
const express = require("express");
const app = express();



app.get('/', (req, res) => {
    res.send('Hello World!');
  });

//routes import 
const aiRoutes=require('./routes/ai.routes')

//routes declaration
app.use('/ai',aiRoutes)
 
module.exports = app;