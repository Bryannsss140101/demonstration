const PDF_FILE = "main.pdf";
const TITLE = "Mi demostración";

document.title = TITLE;
document.getElementById("doc-title").textContent = TITLE;

document.getElementById("pdf-frame").src = PDF_FILE;
document.getElementById("pdf-name").textContent = PDF_FILE;

document.getElementById("open-btn").href = PDF_FILE;
document.getElementById("download-btn").href = PDF_FILE;
