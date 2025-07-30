"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello world");
var age = 30;
var firstName = "John";
var isStudent = false;
// TypeScript can also infer types
var lastName = "Doe"; // Inferred as string
console.log(age, firstName, isStudent, lastName);
var userName = "John Doe";
var userAge = 30;
var userIsStudent = false;
console.log(userName, userAge, userIsStudent);
var productName = "Apple";
var productPrice = 1;
var isInStock = true;
// --- Arrays ---
// An array of strings
var skills = ["JavaScript", "TypeScript", "React"];
// An array of numbers
var scores = [95, 88, 100];
// --- Objects ---
// Defining the shape of an object inline
var user = {
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
var productNames = ["BBQ", "Pizza", "Burger", "Sandwich"];
var productPrices = [20, 45, 64, 444];
var product = {
    name: "BBQ",
    price: 300,
    isInStock: true
};
console.log(product);
// Now we can use this interface to type our objects.
var product1 = {
    name: "Gaming Mouse",
    price: 75,
    isInStock: true,
    tags: ["gaming", "electronics"]
};
var product2 = {
    name: "Mechanical Keyboard",
    price: 120,
    isInStock: false // We can create another product with the same structure
};
// We can also use it to type an array of objects
var inventory = [product1, product2];
console.log("A single product:", product1);
console.log("Our inventory list:", inventory);
var user1 = {
    id: 1,
    userName: "Syed Ali Ahmed",
    email: "ali@gmail.com",
    isPremium: true,
    lastLogin: new Date(),
    middleName: "Ali"
};
var user2 = {
    id: 2,
    userName: "John Doe",
    email: "john@gmail.com",
    isPremium: false,
    lastLogin: new Date()
};
// Example 1: A function that takes a Product and returns a formatted string.
// - `product: Product`: The parameter 'product' MUST conform to the Product interface.
// - `: string`: This function MUST return a string.
function getProductDisplayString(product) {
    return "Product: ".concat(product.name, ", Price: $").concat(product.price.toFixed(2));
}
// Let's create a product to test our function
var myProduct = { name: "Coffee Beans", price: 19.99, isInStock: true };
var displayString = getProductDisplayString(myProduct);
console.log(displayString);
// TypeScript would give an error if we tried to call it with the wrong data:
// const wrongData = { name: "Book", cost: 25 };
// getProductDisplayString(wrongData); // Error: Argument of type '{ name: string; cost: number; }' is not assignable to parameter of type 'Product'.
// Example 2: A function with an optional parameter and a number return type.
function calculateSalesTax(price, taxRate) {
    if (taxRate === void 0) { taxRate = 0.07; }
    return price * taxRate;
}
var salesProductPrice = 150;
var tax = calculateSalesTax(salesProductPrice); // Uses default taxRate
var specialTax = calculateSalesTax(salesProductPrice, 0.10); // Overrides default
console.log("Tax on $".concat(salesProductPrice, " is $").concat(tax.toFixed(2)));
console.log("Special tax on $".concat(salesProductPrice, " is $").concat(specialTax.toFixed(2)));
// Example 3: A function that doesn't return anything.
// The return type for functions that don't return a value is `void`.
function logMessage(message) {
    console.log("LOG:", message);
}
logMessage("Application has started.");
function getUserWelcomeMessage(user) {
    return "Welcome ".concat(user.userName, "! You have successfully logged in on ").concat(user.lastLogin.toLocaleDateString());
}
var welcomeMsg = getUserWelcomeMessage(user1);
console.log(welcomeMsg);
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Customer"] = 1] = "Customer";
    UserRole[UserRole["Guest"] = 2] = "Guest";
})(UserRole || (UserRole = {}));
function canAccessAdminPanel(role) {
    return role === UserRole.Admin;
}
console.log(canAccessAdminPanel(UserRole.Customer)); // false
function getOrderMessage(status) {
    if (status === "new")
        return "The Order is ".concat(status);
    else if (status === "processing")
        return "The Order is ".concat(status);
    else if (status === "shipped")
        return "The Order is ".concat(status);
    else
        return "Wrong Order message";
}
var SubscriptionLevel;
(function (SubscriptionLevel) {
    SubscriptionLevel[SubscriptionLevel["Free"] = 0] = "Free";
    SubscriptionLevel[SubscriptionLevel["Pro"] = 1] = "Pro";
    SubscriptionLevel[SubscriptionLevel["Enterprise"] = 2] = "Enterprise";
})(SubscriptionLevel || (SubscriptionLevel = {}));
function isPremiumSubscription(level) {
    if (level == (SubscriptionLevel.Pro || SubscriptionLevel.Enterprise))
        return true;
    else
        return false;
}
getOrderMessage("new");
isPremiumSubscription(SubscriptionLevel.Enterprise);
function formattedProduct(product) {
    var productDescription = "The name of Product is ".concat(product.name, " & it's price is ").concat(product.price);
    return "".concat(productDescription);
}
console.log(formattedProduct({ id: 2, name: 'ali', price: 29 }));
var amount = 126524.65;
var date = new Date();
var formattedAmount = new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(amount);
var formattedDate = new Intl.DateTimeFormat('en-US', { year: "numeric", month: "numeric", day: "numeric" }).format(date);
console.log(formattedDate);
console.log(formattedAmount);
//writing the the utility function to check if the string is the valid phone number or not.
function isValidNumberComprehensive(num) {
    // Regex for Pakistani numbers:
    // - Starts with 03XX or +923XX
    // - Allows optional spaces or hyphens as separators
    // - Total of 10 digits after 03 or 9 digits after +923
    var comprehensivePakistaniRegex = /^((\+92)?(0)?3[0-4][0-9]( )?[- ]?\d{7})$/;
    // Breaking down the regex:
    // ^                                 - Start of the string
    // (                                 - Start of main capturing group
    //   (\+92)?                         - Optional +92 prefix
    //   (0)?                            - Optional 0 after +92 (e.g., +920300... is less common but possible)
    //   3[0-4][0-9]                     - The '3' followed by the network code digit (0-4) and next digit
    //   [ - ]?                           - Optional hyphen or space
    //   \d{7}                           - The remaining 7 digits
    // )                                 - End of main capturing group
    // $                                 - End of the string
    return comprehensivePakistaniRegex.test(num);
}
console.log("\n--- Comprehensive Pakistani Number Validation ---");
console.log("031-82552591:", isValidNumberComprehensive("031-82552591")); // true
console.log("03001234567:", isValidNumberComprehensive("03001234567")); // true
console.log("+923331234567:", isValidNumberComprehensive("+923331234567")); // true
console.log("+92 321 1234567:", isValidNumberComprehensive("+92 321 1234567")); // true
console.log("0345 9876543:", isValidNumberComprehensive("0345 9876543")); // true
console.log("021-1234567:", isValidNumberComprehensive("021-1234567")); // false
console.log("123:", isValidNumberComprehensive("123")); // false
console.log("0300-123456:", isValidNumberComprehensive("0300-123456")); // false (too short)
