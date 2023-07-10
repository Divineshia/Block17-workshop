// importring data from coffee-data file
const coffeeMenu = require("./coffee_data.js");

console.log('File 2 is running'); // checking the file

//getting an array of prices alone
let coffeeprice= coffeeMenu.map(priceMenu => priceMenu.price)//- to check the prices alone

// 1. printing the array of coffee names
//mapping generates new array by calling it each member
let coffeeNames= coffeeMenu.map(names => names.name)
console.log("Drinks on the menu:", coffeeNames);



//2. filtering an array of drinks that cost 5 and under.
let priceBelow =coffeeMenu.filter(coffeeprice => (coffeeprice.price <= 5) ); // condition for filtering
 console.log('The drinks under 5$ are :');
 console.log( priceBelow.map(lowprice=> lowprice.name));

 // 3. Printing an array of drinks that are priced at an even number.
 //mod 2 ===0 for even num
 let priceEven =coffeeMenu.filter (coffeeprices =>(coffeeprices.price %2 ===0));
 console.log('The drinks that are priced at even number :');
 console.log( priceEven.map(evenprice=> evenprice.name));

 //4. Printing the total if you were to order one of every drink.
 //initialValue, accumulator , current value are variables needed(can give diff name)
 let initialValue =0;
 const total =coffeeprice.reduce(
    (accumulator,coffeeprice) => accumulator + coffeeprice,initialValue);
 console.log ('Total menu price of drinks',total);


//5. Checking the seasonal drinks
let seasonalDrink = coffeeMenu.filter(seasonDrink => (seasonDrink.seasonal));
let imported=seasonalDrink.map(seasonDrink => seasonDrink.name);
console.log('Seasonal drinks:',imported)

//6. Printing seasonal drinks with specific statement
for (let i=0;i<imported.length; i++){
console.log(`${imported[i]} with imported beans`);
}
