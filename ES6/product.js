class Product{
    constructor(id,name,price,quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    total(){
        return this.price * this.quantity;
    }
    toString(){
        return(`Product Id: ${this.id}\n
        Product Name: ${this.name}\n
        Product Price: ${this.price}\n
        Product Quantity: ${this.quantity}`);
    }
}

module.exports = Product;