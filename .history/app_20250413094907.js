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


// 3.10 GET /items
app.get('/items', (req, res) => {
    res.json([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' }
    ]);
});


























app.listen(port, () => {
    console.log(`Server is running `)
})