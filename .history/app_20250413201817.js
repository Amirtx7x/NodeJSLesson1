const express = require('express');
const app = express();
const port = 1407;
const path = require('path');
app.use(express.json());


// send get request, and show an html content

app.get('/htmltest', (req,res) => { 
    console.log('html page loaded')
    res.send('<html><head><title> fuck you </title><body><h1>zobre fek wla mnyak </h1></body></html>')
})


// path module, when accessing route, we refer to another page.
app.get('/pathtest', function (req,res) {
    console.log('page loaded succesfuuly for path test')
res.sendFile(path.join(__dirname,'./public/index.html'))
})

// ./ point it means stay in the current path 
// ../ it means go one folder up 
// ../.. it means go 2 folders up 




// sending information for the server as JSON

app.get('/jsontestx', function (req,res) {
    res.type('json');
    res.send({name:"5ra 3leek", age: "500"});
    console.log('Json sent')
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