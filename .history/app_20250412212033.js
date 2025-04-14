const express = require('express'); // Here i am saying to NODE, extract for me the "express" way of code
const app = express(); // here i am saying, start my web server with express coding 
const port = 1407;
// --------------------------- // 
app.use(express.static('public')); // here i am telling the node.js use public for all static files html/css/images etc
// ------------// 

app.get('/hello', (req, res) => {
    res.send('hello world try again');
    console.log('just sent the info')
});




app.listen(1407, () => {
    console.log('Server is running on http://localhost:1407');
  });