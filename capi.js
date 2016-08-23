var menu = [];
var diners = [];

var Diner = function(name, collection){
    this.name = name;
    this.dishesEaten = [];
    // then here
    this.addDish = function(dish){
        this.dishesEaten.push(dish);
    };
    this.mealTotal = function(){
        var total = 0;
        this.dishesEaten.forEach(function(dish){
            total += dish.price;
        });

        // taxes 20%
        total *= 1.2; // this part is ok.
        return total;
    };
  collection.push(this); // this would *automatically* add the diner to collection.
};


var Dish = function(name, price, collection){
    this.name = name;
    this.price = price;
    collection.push(this);
}

var capi = new Diner('Capi', diners);
var ben = new Diner('Ben', diners); // ok, because you're telling the object the collection it belongs to.
// i still think [ben] is easier.
// it is automatic now.
// you could just make it like this:
var pizza = new Dish('pizza', 100.99, menu); 
var chips = new Dish('chips', 5.00, menu);


ben.addDish(pizza);
ben.addDish(chips);

console.log(ben.mealTotal()); // if you don't log this, then we don't get to see the output
console.log(menu);
console.log(diners);


