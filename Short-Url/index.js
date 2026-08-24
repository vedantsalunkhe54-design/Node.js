const express = require ('express');
const urlRoute = require('./routes/url');
const {connectToDatabase} = require('./connect');

const app = express();
const PORT = 8001;

connectToDatabase('mongodb://localhost:27017/short-url').then(() => console.log('Connected to database')).catch((err) => console.error('Database connection error:', err));

app.use( "/url", urlRoute);
app.listen(PORT, () => console.log('Server started at port ' + PORT));