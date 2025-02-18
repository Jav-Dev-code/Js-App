document.addEventListener("DOMContentLoaded", function () {
    displayPDFs();
});

// Predefined list of PDFs stored in the project folder
const pdfList = [
    { title: "Chapter 1 - Alert", fileName: "Chapter 1.pdf" },
    { title: "Chapter 2 - Variables for strings", fileName: "chapter 2.pdf" },
    { title: "Chapter 3 - Variables for numbers", fileName: "chapter 3.pdf" },
    { title: "Chapter 4 - Variable Names Legal and Illegal", fileName: "chapter 4.pdf" },
    { title: "Chapter 5 - Math expressions:Familiar operators", fileName: "chapter 5.pdf" },
    { title: "Chapter 6 - Math expressions:Unfamiliar operators", fileName: "chapter 6.pdf" },
    { title: "Chapter 7 - Math expressions:Eliminating ambiguity", fileName: "chapter 7.pdf" },
    { title: "Chapter 8 - Concatenating text strings", fileName: "chapter 8.pdf" },
    { title: "Chapter 9 - Prompts", fileName: "chapter 9.pdf" },
    { title: "Chapter 10 - if statements", fileName: "chapter 10.pdf" },
    { title: "Chapter 11 - Comparison operators", fileName: "chapter 11.pdf" },
    { title: "Chapter 12 - ifelse and else if statements", fileName: "chapter 12.pdf" },
    { title: "Chapter 13 - Testing sets of conditions", fileName: "chapter 13.pdf" },
    { title: "Chapter 14 - if statements nested", fileName: "chapter 14.pdf" },
    { title: "Chapter 15 - Arrays", fileName: "chapter 15.pdf" },
    { title: "Chapter 16 - Arrays: adding and removing elements", fileName: "chapter 16.pdf" },
    { title: "Chapter 17 - Arrays: removing, inserting, and extracting elements", fileName: "chapter 17.pdf" },
    { title: "Chapter 18 -  for loops", fileName: "chapter 18.pdf" },
    { title: "Chapter 19 -  for loops: flags, Booleans, array length, and breaks", fileName: "chapter 19.pdf" },
    { title: "Chapter 20 -  for loops nested", fileName: "chapter 20.pdf" },
    { title: "Chapter 21 - Changing case", fileName: "chapter 21.pdf" },
    { title: "Chapter 22 - Strings: measuring length and extracting parts", fileName: "chapter 22.pdf" },
    { title: "Chapter 23 - Strings: finding segments", fileName: "chapter 23.pdf" },
    { title: "Chapter 24 - Strings: finding a character at a location", fileName: "chapter 24.pdf" },
    { title: "Chapter 25 - Strings: replacing characters", fileName: "chapter 25.pdf" },
    { title: "Chapter 26 - Rounding numbers", fileName: "chapter 26.pdf" },
    { title: "Chapter 27 - Generating random numbers", fileName: "chapter 27.pdf" },
    { title: "Chapter 28 - Converting strings to integers and decimals", fileName: "chapter 28.pdf" },
    { title: "Chapter 29 - Converting strings to numbers, numbers to strings", fileName: "chapter 29.pdf" },
    { title: "Chapter 30 - Controlling the length of decimals", fileName: "chapter 30.pdf" },
    { title: "Chapter 31 - Getting the current date and time", fileName: "chapter 31.pdf" },
    { title: "Chapter 32 - Extracting parts of the date and time", fileName: "chapter 32.pdf" },
    { title: "Chapter 33 - Specifying a date and time", fileName: "chapter 33.pdf" },
    { title: "Chapter 34 - Changing elements of a date and time", fileName: "chapter 34.pdf" },
    { title: "Chapter 35 - Functions", fileName: "chapter 35.pdf" },
    { title: "Chapter 36 - Functions: passing them data", fileName: "chapter 36.pdf" },
    { title: "Chapter 37 - Functions: passing data back from them", fileName: "chapter 37.pdf" },
    { title: "Chapter 38 - Functions: local vs. global variables", fileName: "chapter 38.pdf" },
    { title: "Chapter 39 - switch statements: how to start them", fileName: "chapter 39.pdf" },
    { title: "Chapter 40 - switch statements: how to complete them", fileName: "chapter 40.pdf" },
    { title: "Chapter 41 - while loops", fileName: "chapter 41.pdf" },
    { title: "Chapter 42 - do...while loops", fileName: "chapter 42.pdf" },
    { title: "Chapter 43 - Placing scripts", fileName: "chapter 43.pdf" },
    { title: "Chapter 44 - Commenting", fileName: "chapter 44.pdf" },
    { title: "Chapter 45 - Events: link", fileName: "chapter 45.pdf" },
    { title: "Chapter 46 - Events: button", fileName: "chapter 46.pdf" },
    { title: "Chapter 47 - Events: mouse", fileName: "chapter 47.pdf" },
    { title: "Chapter 48 - Events: fields", fileName: "chapter 48.pdf" },
    { title: "Chapter 49 - Reading field values", fileName: "chapter 49.pdf" },
    { title: "Chapter 50 - Setting field values", fileName: "chapter 50.pdf" },
    { title: "Chapter 51 - Reading and setting paragraph text", fileName: "chapter 51.pdf" },
    { title: "Chapter 52 - Manipulating images and text", fileName: "chapter 52.pdf" },
    { title: "Chapter 53 - Swapping images", fileName: "chapter 53.pdf" },
    { title: "Chapter 54 - Swapping images and setting classes", fileName: "chapter 54.pdf" },
    { title: "Chapter 55 - Setting styles", fileName: "chapter 55.pdf" },
    { title: "Chapter 56 - iTarget all elements by tag name", fileName: "chapter 56.pdf" },
    { title: "Chapter 57 - Target some elements by tag name", fileName: "chapter 57.pdf" },
    { title: "Chapter 58 - The DOM", fileName: "chapter 58.pdf" },
    { title: "Chapter 59 - The DOM: Parents and children", fileName: "chapter 59.pdf" },
    { title: "Chapter 60 - The DOM: Finding children", fileName: "chapter 60.pdf" },
    { title: "Chapter 61 - The DOM: Junk artifacts and nodeType", fileName: "chapter 61.pdf" },
    { title: "Chapter 62 - The DOM: More ways to target elements", fileName: "chapter 62.pdf" },
    { title: "Chapter 63 - The DOM: Getting a target's name", fileName: "chapter 63.pdf" },
    { title: "Chapter 64 - The DOM: Counting elements", fileName: "chapter 64.pdf" },
    { title: "Chapter 65 - The DOM: Attributes", fileName: "chapter 65.pdf" },
    { title: "Chapter 66 - The DOM: Attribute names and values", fileName: "chapter 66.pdf" },
    { title: "Chapter 67 - The DOM: Adding nodes", fileName: "chapter 67.pdf" },
    { title: "Chapter 68 - The DOM: Inserting nodes", fileName: "chapter 68.pdf" },
    { title: "Chapter 69 - Objects", fileName: "chapter 69.pdf" },
    { title: "Chapter 70 - Objects: Properties", fileName: "chapter 70.pdf" },
    { title: "Chapter 71 - Objects: Methods", fileName: "chapter 71.pdf" },
    { title: "Chapter 72 - Objects: Constructors", fileName: "chapter 72.pdf" },
    { title: "Chapter 73 - Objects: Constructors for methods", fileName: "chapter 73.pdf" },
    { title: "Chapter 74 - Objects: Prototypes", fileName: "chapter 74.pdf" },
    { title: "Chapter 75 - Objects: Checking for properties and methods", fileName: "chapter 75.pdf" },
    { title: "Chapter 76 - Browser control: Getting and setting the URL", fileName: "chapter 76.pdf" },
    { title: "Chapter 77 - Browser control: Getting and setting the URL another way", fileName: "chapter 77.pdf" },
    { title: "Chapter 78 - Browser control: Forward and reverse", fileName: "chapter 78.pdf" },
    { title: "Chapter 79 - Browser control: Filling the window with content", fileName: "chapter 79.pdf" },
    { title: "Chapter 80 - Browser control: Controlling the window's size and location", fileName: "chapter 80.pdf" },
    { title: "Chapter 81 - Browser control: Testing for popup blockers", fileName: "chapter 81.pdf" },
    { title: "Chapter 82 - Form validation: text fields", fileName: "chapter 82.pdf" },
    { title: "Chapter 83 - Form validation: drop-downs", fileName: "chapter 83.pdf" },
    { title: "Chapter 84 - Form validation: radio buttons", fileName: "chapter 84.pdf" },
    { title: "Chapter 85 - Form validation: ZIP codes", fileName: "chapter 85.pdf" },
    { title: "Chapter 86 - Form validation: email", fileName: "chapter 86.pdf" },
    { title: "Chapter 87 - Exceptions: try and catch", fileName: "chapter 87.pdf" },
    { title: "Chapter 88 - Exceptions: throw", fileName: "chapter 88.pdf" },
    { title: "Chapter 89 - Handling events within JavaScript", fileName: "chapter 89.pdf" },
    { title: "Understanding RegExp", fileName: "Understanding RegExp.pdf" }
];

// Function to display PDFs (with optional search filter)
function displayPDFs(searchTerm = "") {
    const list = document.getElementById("pdfList");
    if (!list) return; // Prevent errors if element is missing

    list.innerHTML = ""; // Clear list before adding new items

    pdfList.forEach((pdf) => {
        if (pdf.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${pdf.title}</span>
                <a href="pdfs/${pdf.fileName}" download="${pdf.title}.pdf" class="btn primary">Download</a>
            `;
            list.appendChild(li);
        }
    });
}

// Function to search PDFs based on input
function searchPDF() {
    const searchInput = document.getElementById("searchInput").value;
    displayPDFs(searchInput);
}

function logout() {
    window.location.href = "index.html";
}
