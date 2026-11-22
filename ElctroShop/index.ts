
export {};
const storeName: string = "ElectroShop";
const storeDescription: string = "Electronics Store";
const currency: string = "USD";
let availableProducts: number = 3;
let isOpen: boolean = true;


const productNames: string[] = [
    "Laptop",
    "Phone",
    "Headphones",
    "Keyboard",
    "Mouse"
];

const mixedArray: (string | number | boolean)[] = [
    "Laptop", 650, true
];


if (isOpen) {
    console.log("Store is Open");
} else {
    console.log("Store is Closed");
}

let price: number = 650;

if (price > 500) {
    console.log("Expensive Product");
} else if (price >= 100) {
    console.log("Medium Price");
} else {
    console.log("Affordable Product");
}

for (let name of productNames) {
    console.log(name);
}

const prices: number[] = [650, 300, 75, 45, 25];
let count: number = 0;

for (let p of prices) {
    if (p > 100) {
        count++;
    }
}
console.log("Products above 100:", count);

function calculateDiscount(
    price: number,
    discount: number
): number {
    return price - (price * discount / 100);
}

function checkProductAvailability(
    quantity: number
): string {
    return quantity > 0 ? "In Stock" : "Out of Stock";
}

function displayStoreMessage(message: string): void {
    console.log(message);
}

// Part 6: Optional and Default Parameters
function displayProductInfo(
    name: string,
    price: number,
    description?: string,
    currency: string = "USD"
): void {
    console.log(name, price, currency, description);
}


function calculateTotalPrice(...prices: number[]): number {
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

const button = document.getElementById("loadBtn")!;
const container = document.getElementById("products")!;

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
