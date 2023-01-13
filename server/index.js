const express = require('express');
const morgan = require('morgan');
const path = require('path');
const models = require('./model')

const app = express();
app.use(morgan('dev'));
app.use(express.json());

const PORT = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname, './public')));

app.get('/api/movies', (request, response) => {
  model.get((err, movies) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.status(200).json(movies);
    }
  })
});

app.all('/', (req, response) => {
  response.status(200).json('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});