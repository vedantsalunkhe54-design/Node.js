const express = require('express');
const path = require('path');

// program for connecting to MongoDB Atlas
// const mongoose = require('mongoose');        

const { connectToDatabase } = require('./connect');
const urlRoute = require('./routes/url');
const Url = require('./model/Url');

const app = express();

app.use(express.urlencoded({ extended: false }));

const PORT = 8001;

const MONGODB_URI =
    'mongodb+srv://Vedant:Practical12345@cluster0.oqy7d7j.mongodb.net/short-url?appName=Cluster0';

app.use(express.json());

app.use('/url', urlRoute);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./Views'));

app.get('/test', async (req, res) => {
    const allUrls = await Url.find();

    return res.render('Home', {
        urls: allUrls
    });
});

app.get('/', (req, res) => {
    res.send('URL Shortener Server is running!');
});

connectToDatabase(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');

        app.listen(PORT, () => {
            console.log(`Server started at port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });