require('dotenv').config();
// const express = require('express');
import express from 'express'
const morgan = require('morgan');
const helmet = require('helmet');
import authRouter from './routes/auth'


const app = express();

app.use(morgan("combined"));
app.use(helmet());
app.use(express.json)

app.get('/', (request, response) => {
    response.status(200).send("Hello Charbel!");

});



app.use('/auth', authRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server runnning on http://localhost:${process.env.APP_PORT}` )
})