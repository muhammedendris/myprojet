const orderList = document.getElementById("orderList");
const totalPriceEl = document.getElementById("totalPrice");
const foodSelect = document.getElementById("foodSelect");
const quantityInput = document.getElementById("quantity");
const addToOrderBtn = document.getElementById("addToOrder");
const submitOrderBtn = document.getElementById("submitOrder");

let totalPrice = 0;
let orders = [];

// Add item to order
addToOrderBtn.addEventListener("click", () => {
    const selectedOption = foodSelect.options[foodSelect.selectedIndex];
    const foodName = selectedOption.value;
    const foodPrice = parseFloat(selectedOption.getAttribute("data-price"));
    const quantity = parseInt(quantityInput.value);

    if (quantity < 1) return;

    const orderItem = {
        name: foodName,
        price: foodPrice,
        quantity: quantity,
        total: foodPrice * quantity
    };

    orders.push(orderItem);
    totalPrice += orderItem.total;

    updateOrderList();
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
