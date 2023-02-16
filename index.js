'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3002;
const {sequelizeDatabase} = require('./src/models');


sequelizeDatabase.sync()
  .then(()=> {
    console.log('connected');
    start();
  })
  .catch(e=> console.error(e));


const { start } = require('./src/server.js');


start(PORT);