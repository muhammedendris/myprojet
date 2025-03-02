const orderList = document.getElementById("orderList");
const totalPriceEl = document.getElementById("totalPrice");
const foodNameInput = document.getElementById("foodName");
const foodPriceInput = document.getElementById("foodPrice");
const quantityInput = document.getElementById("quantity");
const addToOrderBtn = document.getElementById("addToOrder");
const submitOrderBtn = document.getElementById("submitOrder");

let totalPrice = 0;
let orders = [];

// Add item to order
addToOrderBtn.addEventListener("click", () => {
    const foodName = foodNameInput.value.trim();
    const foodPrice = parseFloat(foodPriceInput.value);
    const quantity = parseInt(quantityInput.value);

    if (foodName === "" || isNaN(foodPrice) || foodPrice <= 0 || quantity < 1) {
        alert("Please enter valid food details!");
        return;
    }

    const orderItem = {
        name: foodName,
        price: foodPrice,
        quantity: quantity,
        total: foodPrice * quantity
    };

    orders.push(orderItem);
    totalPrice += orderItem.total;

    updateOrderList();

    // Clear input fields
    foodNameInput.value = "";
    foodPriceInput.value = "";
    quantityInput.value = "1";
});

// Update order list
function updateOrderList() {
    orderList.innerHTML = "";
    orders.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("order-item");
        li.innerHTML = `${item.name} (x${item.quantity}) - $${item.total} 
                        <button onclick="removeItem(${index})">❌</button>`;
        orderList.appendChild(li);
    });
    totalPriceEl.textContent = totalPrice;
}

// Remove item from order
function removeItem(index) {
    totalPrice -= orders[index].total;
    orders.splice(index, 1);
    updateOrderList();
}

// Submit order (for display only)
submitOrderBtn.addEventListener("click", () => {
    if (orders.length === 0) {
        alert("No items in the order!");
        return;
    }

    alert("Order Submitted!\n" + orders.map(item => `${item.name} x${item.quantity}`).join("\n"));
    
    // Reset order
    orders = [];
    totalPrice = 0;
    updateOrderList();
});
