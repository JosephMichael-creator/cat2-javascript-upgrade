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
//  WISHLIST WITH LOCAL STORAGE

let wishlistInput = document.querySelector("#wishlist-input");
let addWishlistButton = document.querySelector("#add-wishlist-btn");
let wishlistItems = document.querySelector("#wishlist-items");
let wishlistMessage = document.querySelector("#wishlist-message");

// Get previously saved books.
// If there are no saved books, start with an empty array.
let savedBooks =
    JSON.parse(localStorage.getItem("readingWishlist")) || [];

// Save the array inside localStorage.
function saveWishlist() {
    localStorage.setItem(
        "readingWishlist",
        JSON.stringify(savedBooks)
    );
}

// Display all books currently inside savedBooks.
function displayWishlist() {
    // Clear the current list before rebuilding it.
    wishlistItems.innerHTML = "";

    savedBooks.forEach(function (bookName, index) {
        let listItem = document.createElement("li");

        let bookTitle = document.createElement("span");
        bookTitle.textContent = bookName;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.type = "button";
        removeButton.classList.add("remove-btn");

        removeButton.addEventListener("click", function () {
            // Remove the visible list item.
            listItem.remove();

            // Remove the book from the array.
            savedBooks.splice(index, 1);

            // Save the updated array.
            saveWishlist();

            // Rebuild the list.
            displayWishlist();

            wishlistMessage.textContent =
                bookName + " was removed.";
        });

        listItem.appendChild(bookTitle);
        listItem.appendChild(removeButton);

        wishlistItems.appendChild(listItem);
    });
}

// Add a new book.
function addWishlistItem() {
    let bookName = wishlistInput.value.trim();

    if (bookName === "") {
        wishlistMessage.textContent =
            "Please enter a book title.";
        return;
    }

    // Add the book into the array.
    savedBooks.push(bookName);

    // Save the updated array.
    saveWishlist();

    // Display the updated list.
    displayWishlist();

    wishlistMessage.textContent =
        bookName + " was added to your wishlist.";

    wishlistInput.value = "";
    wishlistInput.focus();
}

addWishlistButton.addEventListener(
    "click",
    addWishlistItem
);

// Allow the Enter key to add a book.
wishlistInput.addEventListener(
    "keydown",
    function (event) {
        if (event.key === "Enter") {
            addWishlistItem();
        }
    }
);

// Display saved books when the page first loads.
displayWishlist();
// Book request form validation.
const requestForm = document.querySelector("#request-form");
const requestFeedback = document.querySelector("#request-feedback");

requestForm.addEventListener("submit", function (event) {
    // Stop the page from refreshing after submission.
    event.preventDefault();

    // Read the values entered by the user.
    const studentName = document.querySelector("#student-name").value.trim();
    const studentEmail = document.querySelector("#student-email").value.trim();
    const requestedBook = document.querySelector("#requested-book").value.trim();

    // Check whether any input is empty.
    if (
        studentName === "" ||
        studentEmail === "" ||
        requestedBook === ""
    ) {
        requestFeedback.textContent = "Please complete all the form fields.";
        requestFeedback.className = "form-message error-message";
        return;
    }

    // Perform simple email validation.
    if (!studentEmail.includes("@") || !studentEmail.includes(".")) {
        requestFeedback.textContent = "Please enter a valid email address.";
        requestFeedback.className = "form-message error-message";
        return;
    }

    // Display visible confirmation.
    requestFeedback.textContent =
        `Thank you, ${studentName}. Your request for "${requestedBook}" has been received.`;

    requestFeedback.className = "form-message success-message";

    // Clear the form after successful submission.
    requestForm.reset();
});

// Join the generated cards and display them on the page.
bookList.innerHTML = bookCards.join("");