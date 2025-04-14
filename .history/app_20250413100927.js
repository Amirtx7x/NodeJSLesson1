const express = require('express');
const app = express();
const port = 1407;

app.use(express.json()); // Parse JSON in body

// ✅ PUT ALL ROUTES BEFORE static middleware
app.get('/users', (req, res) => {
    console.log('✅ /users called!');
    res.json([
        { id: 1, name: 'Kate' },
        { id: 2, name: 'John' }
    ]);
});

app.get('/hello', (req, res) => {
    res.send('hello world');
});

app.use(express.static('public')); // MUST BE LAST

app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
