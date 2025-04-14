const express = require('express');
const app = express();
const port = 1407;
app.use(express.json()); // Parse JSON in body

app.get('/hello', (req,res) => {
    res.send('Hello TO you')
})

// 1 - ok

app.get('/date' , (req,res) => {
    res.send(new Date().toISOString());
})



app.get('/random', (req,res) => {
    res.send({number: Math.random()})
})

app.post('/msgrc', (req,res) => {
    res.send('message received')
})



app.get('/status' , (req,res) => {
    res.json([{
        name: 'zobre fek',
        zobre: '50o',
        send3mk: '50xxz'
    }]);
})








// -------------------------------// 
app.use(express.static('public')); 
app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
