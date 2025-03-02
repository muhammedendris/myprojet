const foodItems = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Salad",
    "Tacos",
    "Sandwich",
    "Noodles",
    "Fries",
    "Steak"
];

const foodList = document.getElementById("foodList");
const searchInput = document.getElementById("searchInput");

// Function to display food items
function displayFoods(filteredItems) {
    foodList.innerHTML = "";
    filteredItems.forEach(food => {
        const item = document.createElement("div");
        item.classList.add("food-item");
        item.textContent = food;
        foodList.appendChild(item);
    });
}

// Initial display of all food items
displayFoods(foodItems);

// Search functionality
searchInput.addEventListener("keyup", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredFoods = foodItems.filter(food => food.toLowerCase().includes(searchText));
    displayFoods(filteredFoods);
});
