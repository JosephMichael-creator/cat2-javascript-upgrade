// Array containing the library's featured books.
// Every book has a name property as required by the assessment.
const featuredBooks = [
    {
        name: "Mastering OOP",
        category: "University / BBIT",
        description: "Essential concepts for modern software developers.",
        cover: "📘"
    },
    {
        name: "Advanced Level Physics",
        category: "High School",
        description: "A comprehensive guide to mechanics and kinetics.",
        cover: "📕"
    },
    {
        name: "Business Finance Fundamentals",
        category: "University / BBIT",
        description: "Core principles for corporate financial analysis.",
        cover: "📗"
    },
    {
    name: "African Literature Classics",
    category: "Fiction & Leisure",
    description: "Selected novels from influential African writers.",
    cover: "📙"
}
];
// Reading Wishlist add and remove feature.
const wishlistInput = document.querySelector("#wishlist-input");
const addWishlistButton = document.querySelector("#add-wishlist-btn");
const wishlistItems = document.querySelector("#wishlist-items");
const wishlistMessage = document.querySelector("#wishlist-message");

function addWishlistItem() {
    const bookName = wishlistInput.value.trim();

    // Prevent empty wishlist items.
    if (bookName === "") {
        wishlistMessage.textContent = "Please enter a book title.";
        return;
    }

    // Create a new list item.
    const listItem = document.createElement("li");

    // Create the text containing the book name.
    const bookTitle = document.createElement("span");
    bookTitle.textContent = bookName;

    // Create a remove button for this item.
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.type = "button";
    removeButton.classList.add("remove-btn");

    // Remove only selected wishlist item.
    removeButton.addEventListener("click", function () {
        listItem.remove();
        wishlistMessage.textContent = `${bookName} was removed.`;
    });

    // Place title and button inside the list item.
    listItem.appendChild(bookTitle);
    listItem.appendChild(removeButton);

    // Display completed item on the webpage.
    wishlistItems.appendChild(listItem);

    wishlistMessage.textContent = `${bookName} was added to your wishlist.`;

    // Clear thhe input after adding.
    wishlistInput.value = "";
    wishlistInput.focus();
}

addWishlistButton.addEventListener("click", addWishlistItem);

// Allow the Enter key to add a book.
wishlistInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addWishlistItem();
    }
});
// Select the empty container from index.html.
const bookList = document.querySelector(".flex-container");

// Create HTML for every book in the array.
const bookCards = featuredBooks.map(function (book) {
    return `
        <div class="book-card">
            <div class="book-cover">${book.cover}</div>
            <h4>${book.name}</h4>
            <span class="badge">${book.category}</span>
            <p>${book.description}</p>
        </div>
    `;
});

// Join the generated cards and display them on the page.
bookList.innerHTML = bookCards.join("");