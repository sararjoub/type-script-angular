const storeName = "ElectroShop";
const storeDescription = "Electronics Store";
const currency = "USD";
let availableProducts = 3;
let isOpen = true;
const productNames = [
    "Laptop",
    "Phone",
    "Headphones",
    "Keyboard",
    "Mouse"
];
const mixedArray = [
    "Laptop", 650, true
];
if (isOpen) {
    console.log("Store is Open");
}
else {
    console.log("Store is Closed");
}
let price = 650;
if (price > 500) {
    console.log("Expensive Product");
}
else if (price >= 100) {
    console.log("Medium Price");
}
else {
    console.log("Affordable Product");
}
for (let name of productNames) {
    console.log(name);
}
const prices = [650, 300, 75, 45, 25];
let count = 0;
for (let p of prices) {
    if (p > 100) {
        count++;
    }
}
console.log("Products above 100:", count);
function calculateDiscount(price, discount) {
    return price - (price * discount / 100);
}
function checkProductAvailability(quantity) {
    return quantity > 0 ? "In Stock" : "Out of Stock";
}
function displayStoreMessage(message) {
    console.log(message);
}
// Part 6: Optional and Default Parameters
function displayProductInfo(name, price, description, currency = "USD") {
    console.log(name, price, currency, description);
}
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let p of prices) {
        total += p;
    }
    return total;
}
// Test Functions
console.log(calculateDiscount(200, 10));
console.log(checkProductAvailability(5));
displayStoreMessage("Welcome to ElectroShop");
displayProductInfo("Laptop", 650, "Core i5");
console.log(calculateTotalPrice(100, 200, 50, 150));
const products = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];
const button = document.getElementById("loadBtn");
const container = document.getElementById("products");
button.addEventListener("click", function () {
    container.innerHTML = "";
    for (let product of products) {
        container.innerHTML += `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ${product.price} USD</p>
            <hr>
        `;
    }
});
export {};
