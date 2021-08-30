const express = require('express');
const bodyParser = require('body-parser').json();
const productController=require('./productController');

const server = express();

server.use(bodyParser);
server.get('/', (req, res) => {
    res.send('Hello World');
});

server.use('/api/products', productController);

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
