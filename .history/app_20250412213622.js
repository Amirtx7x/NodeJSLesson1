const express = require ('express');
const app = express();
const port = 1407;
app.use(express.static('public'));
app.use(express.json());