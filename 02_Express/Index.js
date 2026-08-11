const express = require('express');
const users = require("./DB.json");


const app = express ();
const PORT = 3000;

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/api/users', (req,res) => {
    return res.json(users);
})

app.get('/users', (req,res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    return res.send(html);
})

app.get('/api/users/:id', (req,res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    return res.json(user);
})


app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});