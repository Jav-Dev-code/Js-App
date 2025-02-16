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
    { title: "Chapter 85 - Prompts", fileName: "chapter 85.pdf" },
    { title: "Chapter 86 - Prompts", fileName: "chapter 86.pdf" },
    { title: "Chapter 87 - Prompts", fileName: "chapter 87.pdf" },
    { title: "Chapter 88 - Prompts", fileName: "chapter 88.pdf" },
    { title: "Chapter 89 - Prompts", fileName: "chapter 89.pdf" },
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
