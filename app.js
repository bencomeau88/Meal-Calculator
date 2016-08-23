var diners = [];
var menu = [];
var taxTotal= totalWithTax(total);
// var totalWithTax = function(total){
//     total *= 1.2
//     return total; 
// }
var totalWithTip = taxTotal * 1.2; 
var tip = (taxTotal * 1.2) - taxTotal; 
var Diner = function(name, collection) {
    this.name = name;
    this.dishesEaten = [];
    this.addDish = function(dish) {

        this.dishesEaten.push(dish);
        this.mealTotal = function() {
            var total = 0;
            this.dishesEaten.forEach(function(dish) {
                total += dish.price;
            });

            total *= 1.2;
            return total;
        };
        collection.push(this); //upon making a new Object this will push said object into 
        //indicated "collection" from the function }

    };

};

var Dish = function(name, price, collection) {
    this.name = name;
    this.price = price;
    collection.push(this);
}

var calculateTotal = function(diners){
        total = 0; 
        for(i=0; i< diners.length; i++){
            currentDinerTotal = 0;
        
        for(d=0; d< diners[i].dishesEaten.length; d++){
            total += diners[i].dishesEaten[d].price;
            currentDinerTotal += diners[i].dishesEaten[d].price;
        }
        diners[i].individualAmount = currentDinerTotal;
};
    return total;
};



var Ben = new Diner('Ben', diners);
var Ashley = new Diner('Ashley', diners);

var fries = new Dish('fries', 3.99, menu);
var pasta = new Dish('pasta', 12.99, menu);

Ben.addDish(pasta);
Ben.addDish(fries);
Ashley.addDish(fries);

console.log(menu);
console.log(diners);

calculateTotal(diners);

for(i=0; i< diners.length; i++){
    var individualTax = diners[i].individualAmount * 1.2 - diners[i].individualAmount; 
    var individualTotal = diners[i].individualAmount * 1.2;
        console.log(diners[i].name + " food cost " + diners[i].individualAmount + ' with a tax of ' + individualTax + " for a total of " + individualTotal)
}
console.log("To split the tip everyone owes " + tip/diners.length);