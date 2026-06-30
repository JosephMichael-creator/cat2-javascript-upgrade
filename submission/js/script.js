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