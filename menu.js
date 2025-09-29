

// PROBLEM STATEMENT:
// Many restaurants still use manual methods for taking customer orders and processing payments.
// This leads to errors, slow service, and difficulty tracking sales.
// This program automates the food ordering process and payment handling.

// Restaurant Menu Data Structure
const menu = {
    breakfast: [
        { id: 1, name: "Pancakes with Syrup", price: 8000 },
        { id: 2, name: "Omelette and Toast", price: 10000 },
        { id: 3, name: "Continental Breakfast", price: 15000 },
        { id: 4, name: "Porridge", price: 5000 }
    ],
    lunch: [
        { id: 5, name: "Chicken Burger with Fries", price: 18000 },
        { id: 6, name: "Grilled Fish and Rice", price: 22000 },
        { id: 7, name: "Vegetable Stir Fry", price: 12000 },
        { id: 8, name: "Beef Stew with Posho", price: 15000 }
    ],
    dinner: [
        { id: 9, name: "Steak with Mashed Potatoes", price: 35000 },
        { id: 10, name: "Pasta Carbonara", price: 20000 },
        { id: 11, name: "Roasted Chicken with Vegetables", price: 28000 },
        { id: 12, name: "Seafood Platter", price: 45000 }
    ]
};

// Customer order storage
let customerOrders = [];

// FUNCTION: Display menu by meal time
// Why: Makes it easy for customers to see available meals for each time of day
function displayMenu(mealTime) {
    console.log(`\n${mealTime.toUpperCase()} MENU`);
    console.log("=".repeat(50));
    
    // Loop through menu items for the specified meal time
    // Why for loop: We need to display all items in the menu category
    for (let i = 0; i < menu[mealTime].length; i++) {
        const item = menu[mealTime][i];
        console.log(`${item.id}. ${item.name} - UGX ${item.price.toLocaleString()}`);
    }
    console.log("=".repeat(50));
}

// FUNCTION: Display all menus
// Why: Gives customers a complete view of all available options
function displayAllMenus() {
    console.log("\n*** WELCOME TO WAGONDA'S RESTAURANT ***\n");
    displayMenu("breakfast");
    displayMenu("lunch");
    displayMenu("dinner");
}

// FUNCTION: Find menu item by ID
// Why: Allows easy lookup of items when customer places an order
function findMenuItem(itemId) {
    // Search through all meal times to find the item
    // Why for...in loop: Efficient way to iterate through object properties
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
    const menuItem = findMenuItem(itemId);
    
    // Condition: Check if item exists in menu
    // Why if/else: Validate input before processing order
    if (menuItem === null) {
        console.log("\nERROR: Item not found in menu. Please check the item ID.");
        return false;
    }
    
    // Condition: Validate quantity
    // Why if/else: Ensure quantity is positive
    if (quantity <= 0) {
        console.log("\nERROR: Quantity must be greater than zero.");
        return false;
    }
    
    // Add item to order
    const orderItem = {
        name: menuItem.name,
        price: menuItem.price,
        quantity: quantity,
        subtotal: menuItem.price * quantity
    };
    
    customerOrders.push(orderItem);
    console.log(`\n✓ Added ${quantity}x ${menuItem.name} to your order`);
    return true;
}

// FUNCTION: Calculate total bill
// Why: Automates the payment calculation process
function calculateTotal() {
    let total = 0;
    
    // Loop through all orders and sum up subtotals
    // Why for loop: Need to accumulate all order amounts
    for (let i = 0; i < customerOrders.length; i++) {
        total += customerOrders[i].subtotal;
    }
    
    return total;
}

// FUNCTION: Display current order
// Why: Allows customers to review their order before payment
function displayOrder() {
    console.log("\n" + "=".repeat(50));
    console.log("YOUR ORDER SUMMARY");
    console.log("=".repeat(50));
    
    // Condition: Check if order is empty
    // Why if/else: Handle empty order scenario
    if (customerOrders.length === 0) {
        console.log("Your order is empty.");
        console.log("=".repeat(50));
        return;
    }
    
    // Loop through and display each order item
    // Why for loop: Display all items in the order
    for (let i = 0; i < customerOrders.length; i++) {
        const item = customerOrders[i];
        console.log(`${i + 1}. ${item.name} x${item.quantity} - UGX ${item.subtotal.toLocaleString()}`);
    }
    
    const total = calculateTotal();
    console.log("=".repeat(50));
    console.log(`TOTAL: UGX ${total.toLocaleString()}`);
    console.log("=".repeat(50));
}



// ==================== DEMONSTRATION ====================
// This section demonstrates how the system works

console.log("\n*** RESTAURANT ORDER SYSTEM DEMO ***\n");

// Step 1: Display all available menus
displayAllMenus();

// Step 2: Customer places order
console.log("\n--- Customer is placing an order ---");
addToOrder(2, 2);  // 2x Omelette and Toast (Breakfast)
addToOrder(6, 1);  // 1x Grilled Fish and Rice (Lunch)
addToOrder(10, 2); // 2x Pasta Carbonara (Dinner)

// Step 3: Display order summary
displayOrder();

// Step 4: Process payment
console.log("\n--- Customer is making payment ---");
const total = calculateTotal();
processPayment(80000); // Customer pays 80,000 UGX

console.log("\nThank you for dining with us! 🍽️\n");

console.log("The End");