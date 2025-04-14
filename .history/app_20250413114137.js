const express = require('express');
const app = express();
const port = 1407;
app.use(express.json());

app.get('/hello', (req,res) => {
    res.send('zobre fek')
})

// -ok

app.get('/date' , (req,res) => {
    res.send(new Date().toISOString());
})

// -ok

app.get('/random', (req,res) => {
    res.send({number: Math.random()})
})


















app.use(express.static('public')); 
app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});



















































/* const express = require('express');
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
    res.json([
        {name: 'zobre fek',
            car: '500',
            llesh:'sed n3mk'
        }

]);

})

app.get('/statux', (req,res) => {
    res.send('sever is running currently')
})


app.post('/echo' , (req,res) => {
    res.json(req.body)
})




// 3.9 PUT /item/:id
app.put('/item/:id', (req, res) => {
    res.json({ id: req.params.id, ...req.body });
});























// -------------------------------// 
app.use(express.static('public')); 
app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
 */