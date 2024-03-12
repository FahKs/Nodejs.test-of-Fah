const express = require('express');
const app = express();
const port = 3000;
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/Public/")));

app.get("/",(req,res)=>{
    res.send('KaningCGM48');
})

app.listen(port,()=>{
    debug("Listening on port",port);
}) 
