const PDFS = [
    {
        file: "pdf/P1__Circle_Demostration.pdf",
        title: "Circle Demostration",
        description: "Formal mathematical derivation of the area formula using integral calculus and geometric reasoning."
    },
    {
        file: "pdf/P2__TicTacToe.pdf",
        title: "Tic Tac Toe",
        description: "Implementation of the Minimax algorithm for decision-based agents in zero-sum games."
    }
];

const listEl = document.getElementById("pdf-list");
const frameEl = document.getElementById("pdf-frame");
const titleEl = document.getElementById("pdf-title");
const descEl = document.getElementById("pdf-description");
const openBtn = document.getElementById("open-btn");
const downloadBtn = document.getElementById("download-btn");

function loadPdf(i) {
    const p = PDFS[i];
    
    // Carga de datos
    frameEl.src = p.file;
    titleEl.textContent = p.title;
    descEl.textContent = p.description;
    openBtn.href = p.file;
    downloadBtn.href = p.file;
    
    // Gestión de clases activas
    document.querySelectorAll(".doc-item").forEach((el, idx) => {
        if (idx === i) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}

// Generar lista dinámica
PDFS.forEach((p, i) => {
    const li = document.createElement("li");
    li.className = "doc-item";
    li.textContent = p.title;
    li.onclick = () => loadPdf(i);
    listEl.appendChild(li);
});

// Iniciar primera carga
if (PDFS.length > 0) loadPdf(0);