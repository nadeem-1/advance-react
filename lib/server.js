const express = require('express')
const config = require('./config')
import {data} from './testData'
//after babel
// import express from 'express';
// import config from './config';
import serverRenderer from './serverRenderer'
const app = express();

app.use(express.static('public'));
 app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    const initialContent = serverRender();
    res.render('index',{initialContent});
});

app.get('/data',(req,res)=>{
    res.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on.. ${config.port}`);
});