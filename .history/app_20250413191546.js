const express = require('express');
const app = express();
const port = 1407;
const path = require('path');
app.use(express.json());




//-------- send html as string , in the get requrest --------
app.get('/hello', (req, res)=>{
    res.send('<html><head><title>Hello</title></head>'+
             '<body><h1>Hello World</h1></body></html>');
});

//-------- defining a path in which we refer to a different file to show
// here we defined a path of '/hellox' ,, in which it shows the content of index.html file --------

app.get('/hellox', (req, res) => {
    res.sendFile(path.join(__dirname, './public/test.pdf'));
});


const fs = require('fs');
//  change get to POST if that's what you need
//app.post('/hello', function(req, res){
app.get('/hello', (req, res) => {
    fs.readFile('./hello.html', (err, data) =>  {
        // if there was an error 
        //   while trying to open the file
        //    just send back an error page
        //     made with some html (not an html file)
        if (err) {
            console.log(err);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.write('<html> <body> <h1> internal error </h1> </body> </html>');
            return res.end();
        }
        else // successfully loaded the file, so send it to the client
        {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    });
});
























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