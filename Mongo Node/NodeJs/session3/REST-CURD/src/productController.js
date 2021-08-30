const express = require('express');
const Product = require('./product');
const router = express.Router();

products:Product[10]=[];

router.get('', (req, res) => {
    res.status(200).send(this.products);
});

router.post('', (req, res) => {
    if (!this.products) {
        this.products=[];
    }
    const product = new Product(req.body.id,req.body.name, req.body.price);
    this.products.push(product);
    res.status(201).send(product);
});

router.put('', (req, res) => {
    for (let index = 0; index < this.products.length; index++) {
        if (this.products[index].name === req.body.name) {
            this.products[index].price = req.body.price;
            break;
        }
        
    }
    res.status(200).send(this.products);
});
router.delete('', (req, res) => {
    var productId=this.products.indexOf(p=>p.name===req.params.name);
    this.products.splice(productId,1);
    res.status(200).send(this.products);
}
);
module.exports = router;