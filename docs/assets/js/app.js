const PDFS = [
    { file: "pdf/P1__Circle_Demostration.pdf", title: "Área de un círculo" },
];

// Elementos
const listEl = document.getElementById("pdf-list");
const frameEl = document.getElementById("pdf-frame");
const nameEl = document.getElementById("pdf-name");
const subtitleEl = document.getElementById("doc-subtitle");
const openBtn = document.getElementById("open-btn");
const downloadBtn = document.getElementById("download-btn");

// Renderiza menú
PDFS.forEach((p, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "list-btn";
    btn.textContent = p.title;
    btn.onclick = () => loadPdf(i);
    li.appendChild(btn);
    listEl.appendChild(li);
});

// Carga un PDF en el visor
function loadPdf(i) {
    const p = PDFS[i];
    frameEl.src = p.file;
    nameEl.textContent = p.file.split("/").pop();
    subtitleEl.textContent = p.title;

    openBtn.href = p.file;
    downloadBtn.href = p.file;

    // resalta seleccionado
    document.querySelectorAll(".list-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".list-btn")[i].classList.add("active");
}

// Cargar el primero al abrir
loadPdf(0);
