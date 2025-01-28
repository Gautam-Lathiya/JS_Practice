const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Map.groupBy(fruits, myCallback);

// Display Results
let text ="These fruits are Ok: <br>";
for (let x of result.get("ok")) {
    text += x.name + " " + x.quantity + "<br>";
}
text += "<br>These fruits are low: <br>";
for (let x of result.get("low")) {
    text += x.name + " " + x.quantity + "<br>";
}
document.getElementById("demo").innerHTML = text;

console.log(result);