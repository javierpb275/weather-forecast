const express = require('express');

const app = express();

app.listen(3000, () => console.log('Server is up on port 3000.'));

app.get('', (req, res) => {
    res.send('<h1>WEATHER</h1>');
});

app.get('/help', (req, res) => {
    res.send([
        {
        name: 'Pepe',
        age: 40
        },
        {
        name: 'Paco',
        age: 37
        }
    ]);
})

app.get('/about', (req, res) => {
    res.send('About Page!');
});

app.get('/weather', (req, res) => {
    res.send('Weather Page!');
})
