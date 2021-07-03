const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath));

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
    res.send('<h1>ABOUT</h1>');
});

app.get('/weather', (req, res) => {
    res.send([
        {
        location: 'New York',
        forecast: 'Raining'
        },
        {
        location: 'Los Angeles',
        forecast: 'Sunny'
        }
    ]);
})
