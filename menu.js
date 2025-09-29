
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
    breakfast: {
        1: { name: "Rolex", price: 5000 },
        2: { name: "Pancakes", price: 8000 },
        3: { name: "English Breakfast", price: 15000 },
        4: { name: "Fruit Salad", price: 7000 },
        5: { name: "Coffee", price: 3000 }
    },
    lunch: {
        1: { name: "Chicken & Chips", price: 15000 },
        2: { name: "Fish Fillet", price: 18000 },
        3: { name: "Vegetable Rice", price: 12000 },
        4: { name: "Beef Burger", price: 16000 },
        5: { name: "Caesar Salad", price: 10000 }
    },
    dinner: {
        1: { name: "Grilled Tilapia", price: 25000 },
        2: { name: "Pizza", price: 30000 },
        3: { name: "Steak & Chips", price: 28000 },
        4: { name: "Pasta Alfredo", price: 20000 },
        5: { name: "Vegetable Curry", price: 18000 }
    }
};

// created an empty array to hold orders these will be appended as the customer makes their choices
let orders = [];

// Function to display the main menu categories
function displayMainMenu() {
    console.log("\n--- UCU Restaurant Main Menu ---");
    console.log("1. Breakfast Menu");
    console.log("2. Lunch Menu");
    console.log("3. Dinner Menu");
    console.log("4. Exit");
}

// Function to display specific menu items
function displayMenu(menuType) {
    console.log(`\n--- ${menuType.charAt(0).toUpperCase() + menuType.slice(1)} Menu ---`);
    for (let key in menu[menuType]) {
        console.log(`${key}. ${menu[menuType][key].name} - ${menu[menuType][key].price} UGX`);
    }
}

// Function to add an order (returns true if valid, false if invalid)
function addOrder(menuType, choice, quantity) {
    if (menu[menuType][choice]) {
        orders.push({
            item: menu[menuType][choice].name,
            price: menu[menuType][choice].price,
            quantity: quantity,
            subtotal: menu[menuType][choice].price * quantity
        });
        console.log(`Added: ${quantity} x ${menu[menuType][choice].name}`);
        return true;
    } else {
        console.log("Invalid choice. Please select again.");
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

// Function to get valid user input
function getUserInput(prompt) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => readline.question(prompt, ans => {
        readline.close();
        resolve(ans);
    }));
}

// --------------------
// MAIN PROGRAM LOGIC
// --------------------

async function main() {
    console.log("Welcome to UCU Restaurant!");
    
    while (true) {
        displayMainMenu();
        
        let mainChoice = await getUserInput("Please select a menu (1-4): ");
        
        if (mainChoice === "4") {
            if (orders.length > 0) {
                printReceipt();
            }
            console.log("Thank you for visiting UCU Restaurant!");
            break;
        }
        
        let menuType;
        switch (mainChoice) {
            case "1": menuType = "breakfast"; break;
            case "2": menuType = "lunch"; break;
            case "3": menuType = "dinner"; break;
            default:
                console.log("Invalid choice! Please select a number between 1 and 4.");
                continue;
        }
        
        while (true) {
            displayMenu(menuType);
            let itemChoice = await getUserInput("Select an item (1-5) or 0 to go back to main menu: ");
            
            if (itemChoice === "0") {
                break;
            }
            
            if (!menu[menuType][itemChoice]) {
                console.log("Invalid item choice! Please try again.");
                continue;
            }
            
            let quantity = await getUserInput("Enter quantity: ");
            quantity = parseInt(quantity);
            
            if (isNaN(quantity) || quantity <= 0) {
                console.log("Invalid quantity! Please enter a positive number.");
                continue;
            }
            
            addOrder(menuType, itemChoice, quantity);
            
            let continueOrdering = await getUserInput("Would you like to order more items? (y/n): ");
            if (continueOrdering.toLowerCase() !== 'y') {
                break;
            }
        }
    }
}

main()[
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
