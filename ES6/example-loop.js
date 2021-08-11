var Product=require("./product");

var prod1=new Product(1,'iPhone',50000,2);
var prod2=new Product(2,'MacBook Pro',15000,1);
var prod3=new Product(3,'Ipad',20000,3);
var prod4=new Product(4,'Iphone X',35000,1);
var prod5=new Product(5,'MacBook Air',12000,1);

var products=[prod1,prod2,prod3,prod4,prod5];

for (const product of products) {
    console.log(product.toString());
    console.log(product.total());

    console.log('------------------');
}
