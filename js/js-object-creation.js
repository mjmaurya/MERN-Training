function Customer(name,age,ammount) {
    this.name = name || "Manoj";
    this.age = age || 25;
    this.ammount = ammount || 10000;
    this.displayDetails = function() {
        console.log(this.name + " " + this.age + " " + this.ammount);
    }
}
var cost1= new Customer("John",25,100);
cost1.displayDetails();
var cost2= new Customer();
cost2.displayDetails();