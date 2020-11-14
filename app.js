const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('App running on port %s', port);
});

app.get('/', (req, res) => {
    res.end('Welcome to My first Web application!');
});

app.get('/products', (req, res) => {
    fs.readFile('./products.json', (err, data) => {
        if(err)
            res.json({message: 'Error readingn a file', status: 500});
       
        else
            res.json( data.toString());
    });
});