console.log("Hello world");

let age: number = 30;
let firstName: string = "John";
let isStudent: boolean = false;

// TypeScript can also infer types
let lastName = "Doe"; // Inferred as string

console.log(age, firstName, isStudent, lastName);

let userName: string = "John Doe";
let userAge: number = 30;
let userIsStudent: boolean = false;

console.log(userName, userAge, userIsStudent);

let productName: string = "Apple";
let productPrice: number = 1;
let isInStock: boolean = true;

// --- Arrays ---
// An array of strings
let skills: string[] = ["JavaScript", "TypeScript", "React"];

// An array of numbers
let scores: Array<number> = [95, 88, 100];

// --- Objects ---
// Defining the shape of an object inline
let user: { name: string; age: number; hasPaid: boolean } = {
    name: "Alice",
    age: 25,
    hasPaid: true
};

// Trying to access a non-existent property will give an error
// console.log(user.email); // Error: Property 'email' does not exist on type '{ name: string; age: number; hasPaid: boolean; }'.

// Trying to assign the wrong type to a property will also give an error
// user.age = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'.

console.log(skills);
console.log(scores);
console.log(user);


let productNames: string[] = ["BBQ", "Pizza", "Burger", "Sandwich"];
let productPrices: number[] = [20,45,64,444];

let product: {name: string;
     price: number;
     isInStock: boolean} =  {
    name: "BBQ",
    price: 300,
    isInStock: true
}
console.log(product);

// Step 3: Structuring Data with Interfaces

// In business logic, you often have complex data structures that you reuse,
// like a customer, an order, or a product. Defining the shape of this data
// is crucial. An `interface` is the perfect tool for this.

interface Product {
    name: string;
    price: number;
    isInStock: boolean;
    tags?: string[]; // Optional property
    }

// Now we can use this interface to type our objects.
const product1: Product = {
    name: "Gaming Mouse",
    price: 75,
    isInStock: true,
    tags: ["gaming", "electronics"]
};

const product2: Product = {
    name: "Mechanical Keyboard",
    price: 120,
    isInStock: false // We can create another product with the same structure
};

// We can also use it to type an array of objects
const inventory: Product[] = [product1, product2];

console.log("A single product:", product1);
console.log("Our inventory list:", inventory);

// The '?' in `tags?: string[]` makes the 'tags' property optional.
// Notice `product2` doesn't have it, and TypeScript is perfectly happy.

// This helps fix the linter error about duplicate identifiers.
export {};


interface User {
    id: number;
    userName: string;
    email: string;
    isPremium: boolean;
    lastLogin: Date;
    middleName?: string; 
}

const 
user1: User = {
    id: 1,
    userName: "Syed Ali Ahmed",
    email: "ali@gmail.com",
    isPremium: true,
    lastLogin: new Date(),
    middleName: "Ali"
}

const user2: User = {
    id: 2,
    userName: "John Doe",
    email: "john@gmail.com",
    isPremium: false,
    lastLogin: new Date()
}

// Step 4: Functions in TypeScript

// Interfaces define the shape of our data. Functions define the actions
// and business logic that operate on that data. TypeScript allows us to
// type the inputs (parameters) and outputs (return value) of our functions.

interface Product {
    name: string;
    price: number;
}

// Example 1: A function that takes a Product and returns a formatted string.
// - `product: Product`: The parameter 'product' MUST conform to the Product interface.
// - `: string`: This function MUST return a string.
function getProductDisplayString(product: Product): string {
    return `Product: ${product.name}, Price: $${product.price.toFixed(2)}`;
}

// Let's create a product to test our function
const myProduct: Product = { name: "Coffee Beans", price: 19.99, isInStock: true };
const displayString = getProductDisplayString(myProduct);
console.log(displayString);

// TypeScript would give an error if we tried to call it with the wrong data:
// const wrongData = { name: "Book", cost: 25 };
// getProductDisplayString(wrongData); // Error: Argument of type '{ name: string; cost: number; }' is not assignable to parameter of type 'Product'.

// Example 2: A function with an optional parameter and a number return type.
function calculateSalesTax(price: number, taxRate: number = 0.07): number {
    return price * taxRate;
}

const salesProductPrice = 150;
const tax = calculateSalesTax(salesProductPrice); // Uses default taxRate
const specialTax = calculateSalesTax(salesProductPrice, 0.10); // Overrides default
console.log(`Tax on $${salesProductPrice} is $${tax.toFixed(2)}`);
console.log(`Special tax on $${salesProductPrice} is $${specialTax.toFixed(2)}`);


// Example 3: A function that doesn't return anything.
// The return type for functions that don't return a value is `void`.
function logMessage(message: string): void {
    console.log("LOG:", message);
}

logMessage("Application has started.");

export {};

function getUserWelcomeMessage(user: User): string{

    return `Welcome ${user.userName}! You have successfully logged in on ${user.lastLogin.toLocaleDateString()}`;
}


let welcomeMsg = getUserWelcomeMessage(user1);
console.log(welcomeMsg);

enum UserRole {
    Admin,
    Customer,
    Guest
}

function canAccessAdminPanel(role: UserRole): boolean {
    return role === UserRole.Admin;
}

console.log(canAccessAdminPanel(UserRole.Customer)); // false


type OrderStatus = "new" | "processing" | "shipped"

function getOrderMessage(status: OrderStatus): string{

    if(status === "new")  return `The Order is ${status}`
    else if(status === "processing") return `The Order is ${status}`
    else if (status === "shipped") return `The Order is ${status}`
    else return`Wrong Order message`
}

enum SubscriptionLevel {
    Free,
    Pro,
    Enterprise
}
function isPremiumSubscription(level: SubscriptionLevel): boolean{

    if(level == (SubscriptionLevel.Pro || SubscriptionLevel.Enterprise)) return true
    else return false
}

getOrderMessage("new")
isPremiumSubscription(SubscriptionLevel.Enterprise)

