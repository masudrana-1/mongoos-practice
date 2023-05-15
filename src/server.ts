// const express = require('express')
// // mongoose require 
// const mongoose = require('mongoose');

// import 
// import express from 'express';
// import cors from 'cors';
import mongoose from 'mongoose';
import app from './app';

// const app = express();
const port: Number = 5000;

// using cors 
// app.use(cors());


// database connection 
// main().catch(err => console.log(err));

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');

        console.log(`🙂Database conncetion successful`);

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (err) {
        console.log(`Failed to connect database`, err);
    }
}

bootstrap();


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
