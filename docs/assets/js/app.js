const PDFS = [
    {
        file: "pdf/P1__Circle_Demostration.pdf",
        title: "Area of a Circle – Integral-Based Proof",
        description: "A formal mathematical derivation of the area formula using integral calculus and geometric reasoning."
    },
    {
        file: "pdf/P2__TicTacToe.pdf",
        title: "Tic Tac Toe AI – Algorithmic Development",
        description: "Design and implementation of an AI agent using decision-tree logic and strategic evaluation."
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
    const btn = document.createElement("button");
    btn.className = "list-btn";
    btn.textContent = p.title;
    btn.onclick = () => loadPdf(i);
    li.appendChild(btn);
    listEl.appendChild(li);
});

function loadPdf(i) {
    const p = PDFS[i];
    frameEl.src = p.file;
    titleEl.textContent = p.title;
    descEl.textContent = p.description;
    openBtn.href = p.file;
    downloadBtn.href = p.file;

    document.querySelectorAll(".list-btn")
        .forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".list-btn")[i]
        .classList.add("active");
}

loadPdf(0);
