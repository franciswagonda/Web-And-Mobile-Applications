
/* 
Name: Wagonda Francis Precious
Access Number: B33245
Registration Number: M25B13/038

Problem:
Many restaurants still take orders manually, which is slow and error-prone. 
This program simulates a restaurant menu system where a customer can choose items, 
quantities, and get a final bill.

REQUIREMENT JUSTIFICATION
The following programming constructs were used:
1. CONDITIONS:
    Used to check if the selected item exists on the menu.
    If not valid , customer is asked again (simulated retry).
    Ensures the program handles errors properly.

2. LOOPS:
   "for...in" loop ,to display the menu.
    "for...of" loop, to calculate totals.
    "while" loop, to retry until the customer makes a valid choice.
    Loops ensure continuous flow without repeating code manually.

3. FUNCTIONS:
    displayMenu(),Shows the available items.
    addOrder(choice, quantity) → Adds an item if valid.
    calculateTotal(), Adds up all subtotals.
   printReceipt(),Prints the receipt with totals.
    Functions keep the program modular and clear.
*/

//  created a database menu with items and prices in UGX)
const menu = {
    1: { name: "Rolex", price: 5000 },
    2: { name: "Chicken & Chips", price: 15000 },
    3: { name: "Pizza", price: 30000 },
    4: { name: "Juice", price: 4000 },
    5: { name: "Water", price: 2000 }
};

// created an empty array to hold orders these will be appended as the customer makes their choices
let orders = [];

// Function to display the menu
function displayMenu() {
    console.log("\n--- Restaurant Menu ---");
    for (let key in menu) {
        console.log(`${key}. ${menu[key].name} - ${menu[key].price} UGX`);
    }
}

// Function to add an order (returns true if valid, false if invalid)
function addOrder(choice, quantity) {
    if (menu[choice]) {
        orders.push({
            item: menu[choice].name,
            price: menu[choice].price,
            quantity: quantity,
            subtotal: menu[choice].price * quantity
        });
        console.log(`${quantity} x ${menu[choice].name} .`);
        return true;
    } else {
        console.log(" Invalid choice. Please select again.");
        return false;
    }
}

// Function to calculate total
function calculateTotal() {
    let total = 0;
    for (let order of orders) {
        total += order.subtotal;
    }
    return total;
}

// Function to print receipt
function printReceipt() {
    console.log("\n--- Receipt ---");
    for (let order of orders) {
        console.log(`${order.quantity} x ${order.item} = ${order.subtotal} UGX`);
    }
    console.log("TOTAL: " + calculateTotal() + " UGX");
    console.log("Thank you for dining with us!");
}

// --------------------
// MAIN PROGRAM LOGIC
// --------------------

console.log("Welcome to UCU Restaurant!");
displayMenu();

// Simulated customer choices (including an invalid one to test retry)
let customerChoices = [
    {choice: 1, quantity: 2},  // valid → 2 Rolex
    {choice: 8, quantity: 1},  // invalid → should retry
    {choice: 3, quantity: 1},  // valid → 1 Pizza
    {choice: 2, quantity: 1},  // valid → 1 Chicken & Chips
    {choice: 0, quantity: 0}   // finish ordering
];

// Process customer choices
for (let i = 0; i < customerChoices.length; i++) {
    let currentOrder = customerChoices[i];

    if (currentOrder.choice === 0) {
        break; // stop if customer finishes ordering
    }

    // Retry until a valid choice is made
    let success = addOrder(currentOrder.choice, currentOrder.quantity);
    while (!success) {
        // move to next valid choice (simulate retry by advancing index)
        i++;
        currentOrder = customerChoices[i];
        success = addOrder(currentOrder.choice, currentOrder.quantity);
    }
}

// Print receipt
printReceipt();

console.log("The End");
