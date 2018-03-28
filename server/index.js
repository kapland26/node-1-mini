const express = require('express');
const bodyParser = require('body-parser');
const bc = require('./controllers/books_controller.js');

const app = express();

app.use(bodyParser.json());

const baseURL= '/api/books'
app.get(baseURL, bc.read);
app.post(baseURL, bc.create);
app.put(`${baseURL}/:id`, bc.update);
app.delete(`${baseURL}/:id`, bc.delete);

const port = 3000;
app.listen(port, console.log("Done listening!"));