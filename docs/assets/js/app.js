const PDFS = [
    {
        file: "pdf/P1__Circle_Demostration.pdf",
        title: "Area of a Circle — Integral Derivation",
        description: "Formal proof of the area formula using integral calculus."
    },
    {
        file: "pdf/P2__TicTacToe.pdf",
        title: "Tic Tac Toe AI — Algorithm Design",
        description: "Development of a decision-based AI agent."
    }
];

const listEl = document.getElementById("pdf-list");
const frameEl = document.getElementById("pdf-frame");
const titleEl = document.getElementById("pdf-title");
const descEl = document.getElementById("pdf-description");
const openBtn = document.getElementById("open-btn");
const downloadBtn = document.getElementById("download-btn");

PDFS.forEach((p, i) => {
    const li = document.createElement("li");
    li.className = "doc-item";
    li.textContent = p.title;
    li.onclick = () => loadPdf(i);
    listEl.appendChild(li);
});

function loadPdf(i) {
    const p = PDFS[i];
    frameEl.src = p.file;
    titleEl.textContent = p.title;
    descEl.textContent = p.description;
    openBtn.href = p.file;
    downloadBtn.href = p.file;

    document.querySelectorAll(".doc-item")
        .forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".doc-item")[i]
        .classList.add("active");
}

loadPdf(0);
