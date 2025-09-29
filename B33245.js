// Name: Wagonda Francis Precious
// Access Number: B33245
// Registration Number: M25B13/038

// PROBLEM STATEMENT:
// Restaurant Menu system
// Many restaurants still use manual methods for taking customer orders and calculating totals.
// This leads to errors, slow service, and difficulty tracking orders.
// This program automates the food ordering process and total calculation.

// Restaurant Menu Data Structure
const menu = {
    breakfast: [
        { id: 1, name: "Pancakes with Syrup", price: 8000 },
        { id: 2, name: "Omelette and toast", price: 10000 },
        { id: 3, name: "Milk Tea ", price: 15000 },
        { id: 4, name: "Soya Porridge", price: 5000 }
    ],
    lunch: [
        { id: 5, name: "Chicken Burger with Fries", price: 18000 },
        { id: 6, name: "Grilled Fish and Rice", price: 22000 },
        { id: 7, name: "Beans with all local foods", price: 10000 },
        { id: 8, name: "Beef Stew with Posho", price: 15000 }
    ],
    dinner: [
        { id: 9, name: "Steak with Mashed Potatoes", price: 35000 },
        { id: 10, name: "Pizza medium size", price: 20000 },
        { id: 11, name: "Roasted Chicken with Vegetables", price: 28000 },
        { id: 12, name: "Noodles", price: 45000 }
 ]
};

// Customer order storage
let customerOrders = [];

// FUNCTION: Display menu by meal time
//  its easy for customers to see available meals for each time of day
function displayMenu(mealTime) {
    console.log(`\n${mealTime.toUpperCase()} MENU`);
    console.log("=".repeat(50));


// Loop through menu items for the specified meal time
// to display all items in the menu category
for (let i = 0; i < menu[mealTime].length; i++) {
    const item = menu[mealTime][i];
    console.log(`${item.id}. ${item.name} - UGX ${item.price.toLocaleString()}`);
}
console.log("=".repeat(50));


}

// FUNCTION: Find menu item by ID
//  Allows easy lookup of items when customer places an order
function findMenuItem(itemId) {
    // Search through all meal times to find the item
    for (let mealTime in menu) {
        // Why for loop: Check each item in the meal category
        for (let i = 0; i < menu[mealTime].length; i++) {
            if (menu[mealTime][i].id === itemId) {
                return menu[mealTime][i];
            }
        }
    }
    return null; // Item not found
}

// FUNCTION: Add item to order
// Why: Core function for building customer orders
function addToOrder(itemId, quantity) {
// Input validation
if (!Number.isInteger(quantity) || quantity <= 0) {
    console.log("\nERROR: Quantity must be a positive integer.");
    return false;
}

const menuItem = findMenuItem(itemId);


// Condition: Check if item exists in menu
// Why if/else: Validate input before processing order
if (menuItem === null) {
    console.log("\nERROR: Item not found in menu.");
    return false;
} else {
    // Add item to order
    const orderItem = {
        name: menuItem.name,
        price: menuItem.price,
        quantity: quantity,
        subtotal: menuItem.price * quantity
    };
    
    customerOrders.push(orderItem);
    console.log(`Added ${quantity}x ${menuItem.name} to order`);
    return true;
}


}

// FUNCTION: Calculate total bill
// Why: Automates the total calculation to avoid manual errors
function calculateTotal() {
    let total = 0;
    let i = 0;
    while (i < customerOrders.length) {
        total += customerOrders[i].subtotal;
        i++;
    }
    return total;
}

// FUNCTION: Clear order
// Allows resetting the order in case the customer changes their mind
function clearOrder() {
    customerOrders = [];
    console.log("\nOrder cleared successfully!");
}

// FUNCTION: Display order summary
//  Shows customers what they ordered and the total amount
function displayOrder() {
    console.log("\n" + "=".repeat(50));
    console.log("ORDER SUMMARY");
    console.log("=".repeat(50));

    if (customerOrders.length === 0) {
        console.log("No items in order.");
    } else {
        for (let i = 0; i < customerOrders.length; i++) {
            const item = customerOrders[i];
            console.log(`${i + 1}. ${item.name} x${item.quantity} - UGX ${item.subtotal.toLocaleString()}`);
        }
        
        const total = calculateTotal();
        console.log("=".repeat(50));
        console.log(`TOTAL: UGX ${total.toLocaleString()}`);
    }
    console.log("=".repeat(50));
}
//below is a sample output of the system at work

console.log("*** WAGONDA'S RESTAURANT ORDER SYSTEM ***\n");

// Display breakfast menu
displayMenu("breakfast");

// Display lunch menu
displayMenu("lunch");

// Display dinner menu
displayMenu("dinner");

// Customer places order
console.log("\n— Taking Customer Order —\n");
addToOrder(2, 2);  // 2x Omelette and Toast
addToOrder(6, 1);  // 1x Grilled Fish and Rice
addToOrder(11, 1); // 1x Roasted Chicken with Vegetables

// Display final order and total
displayOrder();

console.log("\nThank you for your order!");

console.log("The End");