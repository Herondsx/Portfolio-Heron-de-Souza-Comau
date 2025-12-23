// DADOS COMPLETOS (Sincronizado com a versão React)
const projectsData = [
  {
    id: 6,
    title: "WeldScanner",
    category: "Simulação & Análise",
    client: "Engenharia de Processos",
    status: "completed",
    progress: 100,
    tech: ["C#", "WPF", "Algoritmos", "Excel"],
    description: "Leitor avançado de backups de robôs para extração, comparação e análise profunda de pontos de solda.",
    details: "Desenvolvi esta ferramenta para ler backups brutos ou arquivos isolados (.pdl/.var/.tp), extraindo os pontos de solda e apresentando-os em um Grid. Programei toda a lógica de 'tracking' dos pontos do carro comparando com a tabela nominal do cliente, cálculo de Deltas e geração de relatórios precisos em Excel. Implementei também um visualizador 3D nativo.",
    myComment: "Este foi o maior e mais complexo projeto que fiz até agora. A capacidade de fazer uma análise profunda das tabelas nominais versus backups e gerar deltas precisos em Excel trouxe um ganho enorme de produtividade.",
    images: {
      cover: "Imagens-Portfolios/WeldScanner.png",
      gallery: []
    },
    subtasks: [
      { id: 't1', title: "Leitura de Backups", completed: true },
      { id: 't2', title: "Algoritmo de Delta", completed: true },
      { id: 't3', title: "Visualizador 3D", completed: true },
      { id: 't4', title: "Relatórios Excel", completed: true },
    ]
  },
  {
    id: 7,
    title: "Central de Gestão",
    category: "Gestão & Web",
    client: "Engenharia & Mecânica",
    status: "ongoing",
    progress: 35,
    tech: ["HTML/CSS/JS", "Mobile", "Blazor"],
    description: "Plataforma Web que estou desenvolvendo para o gerenciamento do ciclo de vida de projetos na engenharia.",
    details: "Estou construindo este sistema para centralizar informações iniciais, gestão de dispositivos, marcos do projeto (Milestones) e Dashboards. O foco é permitir a liberação de dispositivos para simulação. Comecei em HTML/JS e planejo a migração para Blazor.",
    myComment: "Diria que este projeto está 35% pronto. Comecei em HTML/CSS/JS puro para agilizar, mas já estou planejando toda a migração para Blazor assim que a hospedagem for liberada.",
    images: {
      cover: "Imagens-Portfolios/Controle-Status.png",
      gallery: []
    },
    subtasks: [
      { id: 't1', title: "Interface Web", completed: true },
      { id: 't2', title: "Design Review", completed: true },
      { id: 't3', title: "Dashboards KPI", completed: false },
      { id: 't4', title: "Migração Blazor", completed: false },
    ]
  },
  {
    id: 2,
    title: "PDL Remaker",
    category: "Automação",
    client: "Comau Tools",
    status: "completed",
    progress: 100,
    tech: ["C#", "WPF", "VS 2022"],
    description: "Corretor automático de código .pdl (Robôs Comau) para garantir estabilidade dentro do Process Simulate.",
    details: "Projetei o algoritmo para ler o código do robô, pontuar possíveis erros com altíssima precisão e realizar as correções automaticamente. Integrei esta ferramenta com sucesso ao pacote Comau Tools.",
    myComment: "O diferencial aqui é a 'precisão altíssima' na detecção. Ele não só aponta o erro, mas entrega o código corrigido.",
    images: {
      cover: "Imagens-Portfolios/PDL-Remake.png",
      gallery: []
    },
    subtasks: [
      { id: 't1', title: "Parser .pdl", completed: true },
      { id: 't2', title: "Detecção Erros", completed: true },
      { id: 't3', title: "Correção Auto", completed: true },
      { id: 't4', title: "Integração Tools", completed: true },
    ]
  },
  {
    id: 8,
    title: "Corretor ABB",
    category: "Simulação",
    client: "Tecnomatix Int.",
    status: "completed",
    progress: 100,
    tech: ["C#", "WPF", "Tecnomatix API"],
    description: "Ferramenta de correção de código para robôs ABB que inseri diretamente dentro do Process Simulate.",
    details: "Desenvolvi de forma semelhante ao PDL Remaker, mas focado em ABB e rodando integrado ao software da Siemens. Com este projeto, demostrei a capacidade de criar plugins internos para o Process Simulate.",
    myComment: "A grande sacada foi inserir a ferramenta diretamente dentro do Process Simulate usando bibliotecas da Tecnomatix.",
    images: {
      cover: "Imagens-Portfolios/ABB-Tool.png",
      gallery: []
    },
    subtasks: [
      { id: 't1', title: "API Tecnomatix", completed: true },
      { id: 't2', title: "Lógica ABB", completed: true },
      { id: 't3', title: "Interface WPF", completed: true },
    ]
  },
  {
    id: 3,
    title: "Decodificador Binário",
    category: "Engenharia Reversa",
    client: "Comau Tools",
    status: "ongoing",
    progress: 60,
    tech: ["C#", "WPF", "Leitura Binária"],
    description: "Leitor 'puro' de códigos binários (.cod/.var) que estou desenvolvendo para eliminar a necessidade do WinCRC.",
    details: "Um dos meus projetos de maior complexidade técnica. Estou implementando a descriptografia e leitura direta de binários através de APIs para converter arquivos onde o código fonte foi perdido.",
    myComment: "Esse é um projeto com grau de dificuldade muito alta por envolver descriptografia e leitura binária pura.",
    images: {
      cover: "Imagens-Portfolios/.cod.var--.pdl.lsv.png",
      gallery: []
    },
    subtasks: [
      { id: 't1', title: "Eng. Reversa", completed: true },
      { id: 't2', title: "Descriptografia", completed: true },
      { id: 't3', title: "Conversão Texto", completed: false },
    ]
  },
  {
    id: 4,
    title: "Rebuild Cod/Var",
    category: "Robótica",
    client: "Comau Tools",
    status: "completed",
    progress: 100,
    tech: ["C#", "WPF", "VS 2022"],
    description: "Ferramenta que desenvolvi para recálculo de trajetórias visando evitar colisões entre robôs.",
    details: "Criei uma lógica matemática que refaz o movimento do robô para garantir que a trajetória esteja livre de colisões. Foi desenvolvido para uma aplicação específica e depois o integrei ao Comau Tools.",
    myComment: "Fiz essas ferramentas para uma aplicação específica que precisava evitar colisão a todo custo.",
    images: {
      cover: "Imagens-Portfolios/Rebuild.png", // Exemplo de nome
      gallery: []
    },
    subtasks: [
      { id: 't1', title: "Cálculo Trajetória", completed: true },
      { id: 't2', title: "Detecção Colisão", completed: true },
      { id: 't3', title: "Novo Caminho", completed: true },
    ]
  },
  {
    id: 5,
    title: "Conversor .jt -> .cojt",
    category: "Conversão 3D",
    client: "Comau Tools",
    status: "completed",
    progress: 100,
    tech: ["C#", "WPF", "Automação"],
    description: "Utilitário que criei para converter arquivos 3D .jt para o formato .cojt, automatizando processos.",
    details: "Automatizei a preparação de arquivos 3D para a simulação, eliminando a necessidade dos scripts .bat instáveis que utilizávamos anteriormente.",
    myComment: "O objetivo principal foi substituir os arquivos .bat antigos que a Simulação usava. Criei algo robusto em C#.",
    images: {
      cover: "Imagens-Portfolios/JT-Converter.png",
      gallery: []
    },
    subtasks: [
      { id: 't1', title: "Leitura .jt", completed: true },
      { id: 't2', title: "Estrutura .cojt", completed: true },
      { id: 't3', title: "Automação Batch", completed: true },
    ]
  },
  {
    id: 1,
    title: "Central Arquivos Web",
    category: "Web & Infra",
    client: "Comau Interno",
    status: "completed",
    progress: 100,
    tech: ["React", "JSON", "HTML/CSS"],
    description: "Meu primeiro projeto na Comau. Uma central web para organização de arquivos de estudos (.jt).",
    details: "Desenvolvi para organizar o fluxo de arquivos da rede. Serviu como minha base de aprendizado para as ferramentas web atuais, embora tenha sido descontinuado por questões de infraestrutura na época.",
    myComment: "Foi meu primeiro projeto na Comau. Trabalhei nele durante um bom tempo, o aprendizado técnico foi essencial.",
    images: {
      cover: "Imagens-Portfolios/First-Site.png",
      gallery: []
    },
    subtasks: [
      { id: 't1', title: "React & JSON", completed: true },
      { id: 't2', title: "Interface Cliente", completed: true },
      { id: 't3', title: "Deploy", completed: true },
    ]
  }
];

// Elementos do DOM
const cardsGrid = document.getElementById("cardsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("projectModal");
const modalBackdrop = document.querySelector("[data-close-modal]");
const modalClose = document.getElementById("modalClose");

// Elementos do Modal
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalStatus = document.getElementById("modalStatus");
const modalClient = document.getElementById("modalClient");
const modalTech = document.getElementById("modalTech");
const modalDetails = document.getElementById("modalDetails");
const modalTasks = document.getElementById("modalTasks");
const modalTaskSummary = document.getElementById("modalTaskSummary");
const modalComment = document.getElementById("modalComment");
const modalId = document.getElementById("modalId");
const modalMainImage = document.getElementById("modalMainImage");
const galleryGrid = document.getElementById("galleryGrid");

// Elementos Fullscreen
const fsOverlay = document.getElementById("fullscreenOverlay");
const fsImage = document.getElementById("fsImage");
const fsClose = document.getElementById("fsClose");

let currentFilter = "all";

// Placeholder generator
function getPlaceholder(text) {
  return `https://placehold.co/800x450/f1f5f9/64748b?text=${encodeURIComponent(text)}`;
}

// Configura imagem com fallback
function setImgSource(imgElement, src, altText) {
  imgElement.src = src;
  imgElement.alt = altText;
  imgElement.onerror = () => {
    imgElement.src = getPlaceholder(altText || "Sem Imagem");
  };
}

// Renderização dos Cards
function renderCards() {
  cardsGrid.innerHTML = "";
  
  const filtered = projectsData.filter(p => currentFilter === "all" || p.status === currentFilter);

  filtered.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = `${index * 100}ms`;

    const railColor = project.status === "completed" ? "var(--emerald)" : "var(--blue)";
    const statusIcon = project.status === "completed" ? "check-circle-2" : "clock";
    const statusText = project.status === "completed" ? "Concluído" : "Em andamento";
    const statusClass = project.status === "completed" ? "status-badge completed" : "status-badge";
    const progressClass = project.status === "completed" ? "progress-fill completed" : "progress-fill";

    const techTags = project.tech.slice(0, 3).map(t => 
      `<span class="tech-pill"><span data-lucide="code-2" width="10"></span>${t}</span>`
    ).join("");

    card.innerHTML = `
      <div class="status-rail" style="background:${railColor}"></div>
      <div class="card-head">
        <div class="card-meta">
          <span class="category">${project.category}</span>
          <span class="card-id">ID: ${String(project.id).padStart(3, "0")}</span>
        </div>
        <span class="${statusClass}">
          <span data-lucide="${statusIcon}" width="12"></span>${statusText}
        </span>
      </div>
      
      <h3 class="card-title">${project.title}</h3>
      <p class="card-desc">${project.description}</p>
      
      <div class="tech">${techTags}</div>
      
      <div class="progress">
        <div class="progress-header">
          <span>Progresso</span>
          <span>${project.progress}%</span>
        </div>
        <div class="progress-bar">
          <div class="${progressClass}" style="width:${project.progress}%"></div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openModal(project));
    cardsGrid.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

// Abrir Modal
function openModal(project) {
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalDetails.textContent = project.details;
  modalComment.textContent = `"${project.myComment}"`;
  modalId.textContent = `PROJETO #${String(project.id).padStart(4, "0")}`;

  const isCompleted = project.status === "completed";
  modalStatus.className = isCompleted ? "status-chip completed" : "status-chip";
  modalStatus.innerHTML = `<span data-lucide="${isCompleted ? "check-circle-2" : "clock"}"></span>${isCompleted ? "Concluído" : "Em Andamento"}`;

  modalClient.innerHTML = `<span data-lucide="layers"></span> Cliente: <strong>${project.client}</strong>`;
  modalTech.innerHTML = project.tech.map(t => `<span class="tech-chip">${t}</span>`).join("");

  // Tasks
  modalTasks.innerHTML = "";
  const doneCount = project.subtasks.filter(t => t.completed).length;
  modalTaskSummary.textContent = `${doneCount}/${project.subtasks.length} Entregues`;

  project.subtasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <div class="task-check ${task.completed ? "completed" : ""}">
        ${task.completed ? '<span data-lucide="check" width="16"></span>' : ''}
      </div>
      <span class="task-title" style="opacity:${task.completed ? 1 : 0.6}">${task.title}</span>
    `;
    modalTasks.appendChild(div);
  });

  // --- LÓGICA DE IMAGEM CORRIGIDA ---
  
  // 1. Imagem Principal
  setImgSource(modalMainImage, project.images.cover, project.title);
  
  // 2. Configura clique para fullscreen na principal
  modalMainImage.onclick = () => openFullscreen(modalMainImage.src);
  
  // 3. Galeria (Só cria se houver items no array gallery)
  galleryGrid.innerHTML = ""; // Limpa
  if (project.images.gallery && project.images.gallery.length > 0) {
    project.images.gallery.forEach((imgSrc, idx) => {
      const thumb = document.createElement("img");
      thumb.className = "thumb";
      setImgSource(thumb, imgSrc, `Evidência ${idx+1}`);
      
      // Ao clicar no thumb, troca a principal
      thumb.onclick = () => {
        const tempSrc = modalMainImage.src;
        modalMainImage.src = thumb.src;
        // Opcional: Efeito visual de troca
      };
      
      galleryGrid.appendChild(thumb);
    });
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  
  if (window.lucide) lucide.createIcons();
}

// Fullscreen Logic
function openFullscreen(src) {
  fsImage.src = src;
  fsOverlay.classList.add("active");
  fsOverlay.setAttribute("aria-hidden", "false");
}

function closeFullscreen() {
  fsOverlay.classList.remove("active");
  fsOverlay.setAttribute("aria-hidden", "true");
}

// Fechar Modal
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Event Listeners
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderCards();
  });
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

// Fechar fullscreen
fsClose.addEventListener("click", closeFullscreen);
fsOverlay.addEventListener("click", (e) => {
  if (e.target === fsOverlay) closeFullscreen();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (fsOverlay.classList.contains("active")) closeFullscreen();
    else if (modal.classList.contains("open")) closeModal();
  }
});

// Inicialização
renderCards();
