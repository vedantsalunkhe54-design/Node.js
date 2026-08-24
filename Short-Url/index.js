const express = require('express');

const { connectToDatabase } = require('./connect');
const urlRoute = require('./routes/url');

const app = express();

const PORT = 8001;

const MONGODB_URI = 'mongodb+srv://Vedant:Practical12345@cluster0.oqy7d7j.mongodb.net/?appName=Cluster0';

app.use(express.json());

app.use('/url', urlRoute);

connectToDatabase(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');

        app.listen(PORT, () => {
            console.log(`Server started at port ${PORT}`);
        });

        app.get('/', (req, res) => {
    res.send('URL Shortener Server is running!');
});
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });