
//This file is AWS Lambda entry point
//All your business code (ExpressJS App) should be done in src/app.js
//leave this file alone, you have been warned

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/app.js');
const server = awsServerlessExpress.createServer(app)

module.exports.universal = (event, context) => awsServerlessExpress.proxy(server, event, context);