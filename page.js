// Sample data (could be fetched from an API)
const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const itemsPerPage = 5; // Number of items per page
let currentPage = 1;

const contentDiv = document.getElementById("content");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageNumbersSpan = document.getElementById("page-numbers");

// Function to display items for the current page
function displayItems() {
    contentDiv.innerHTML = ""; // Clear previous content

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = items.slice(start, end);

    paginatedItems.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item;
        contentDiv.appendChild(div);
    });

    updatePaginationControls();
}

// Function to update pagination controls
function updatePaginationControls() {
    pageNumbersSpan.innerHTML = "";

    const totalPages = Math.ceil(items.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        pageBtn.classList.add(i === currentPage ? "active" : "");
        pageBtn.addEventListener("click", () => {
            currentPage = i;
            displayItems();
        });
        pageNumbersSpan.appendChild(pageBtn);
    }

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// Event listeners for pagination buttons
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayItems();
    }
});

nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayItems();
    }
});

// Initial display
displayItems();
