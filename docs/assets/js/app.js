const PDFS = [
    {
        file: "pdf/P1__Circle_Demostration.pdf",
        title: "Area of a Circle — Integral Derivation",
        description: "Formal proof of the area formula using integral calculus. Explores polar coordinates and Leibniz notation."
    },
    {
        file: "pdf/P2__TicTacToe.pdf",
        title: "Tic Tac Toe AI — Algorithm Design",
        description: "Implementation of the Minimax algorithm for a perfect-play agent in a 3x3 grid."
    }
];

const listEl = document.getElementById("pdf-list");
const frameEl = document.getElementById("pdf-frame");
const titleEl = document.getElementById("pdf-title");
const descEl = document.getElementById("pdf-description");
const openBtn = document.getElementById("open-btn");
const downloadBtn = document.getElementById("download-btn");

function init() {
    PDFS.forEach((p, i) => {
        const li = document.createElement("li");
        li.className = "doc-item";
        li.textContent = p.title;
        li.addEventListener('click', () => loadPdf(i));
        listEl.appendChild(li);
    });
    
    // Cargar el primero por defecto
    loadPdf(0);
}

function loadPdf(i) {
    const p = PDFS[i];
    
    // Efecto de carga suave
    frameEl.style.opacity = 0;
    
    setTimeout(() => {
        frameEl.src = p.file;
        titleEl.textContent = p.title;
        descEl.textContent = p.description;
        openBtn.href = p.file;
        downloadBtn.href = p.file;
        frameEl.style.opacity = 1;
    }, 150);

    // Actualizar estado activo
    document.querySelectorAll(".doc-item").forEach((el, idx) => {
        el.classList.toggle("active", idx === i);
    });

    // Scroll suave en móvil
    if (window.innerWidth < 900) {
        document.querySelector('.viewer-section').scrollIntoView({ behavior: 'smooth' });
    }
}

init();
