const express = require ('express');
const app = express();
const port = 1407;
app.use(express.static('public'));
app.use(express.json());

// ---- // 

app.get('/hello', (req,res) => {
    res.send('hello mother fucker')
})


app.get('/date', (req,res) => {
    res.send(new Date().toISOString());
})

app.get('/random', (req,res) => {
    res.send({number: Math.random()});
})

app.post('/msg', (req,res) => {
    res.send('Message received!');
})










app.listen(port, () => {
    console.log(`Server is running `)
})