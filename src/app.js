const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Javier'
    });
})

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

app.listen(3000, () => console.log('Server is up on port 3000.'));