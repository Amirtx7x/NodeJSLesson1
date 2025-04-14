const express = require ('express');
const app = express();
const port = 1407;
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


app.get('/users', (req, res) => {
    console.log('✅ /users route was called');
    res.json([
        { id: 1, name: 'Kate' },
        { id: 2, name: 'John' }
    ]);
});























app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running `)
})