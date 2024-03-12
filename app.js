const express = require('express');
const app = express();
const port = 3000;
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');

app.use(morgan('combined'));

app.get("/",(req,res)=>{
    res.send('Hello worddd');
})

app.listen(port,()=>{
    debug("Listening on port"+ chalk.green(port));
})