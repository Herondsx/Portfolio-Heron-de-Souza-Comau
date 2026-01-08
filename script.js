// =========================
// DATA (com seus vídeos + benchmarks reais)
// =========================
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
    details:
      "Desenvolvi esta ferramenta para ler backups brutos ou arquivos isolados (.pdl/.var/.tp), extraindo os pontos de solda e apresentando-os em um Grid. Programei toda a lógica de tracking dos pontos do carro comparando com a tabela nominal do cliente, cálculo de Deltas e geração de relatórios precisos em Excel. Implementei também um visualizador 3D nativo.",
    myComment:
      "Este foi o maior e mais complexo projeto que fiz até agora. A capacidade de fazer uma análise profunda das tabelas nominais versus backups e gerar deltas precisos em Excel trouxe um ganho enorme de produtividade.",
    videoUrl: "Imagens-Portfolios/WeldScanner.mp4",
    // Cenário: 100 programas -> 10 min cada manual / 5s cada no app
    benchmark: {
      timeSaved: 99,
      manualTime: 1000,      // minutos
      appTime: 8.33,         // minutos
      annualSaving: "≈ 16h 32m (lote 100 prog.)",
      roi: "≈ 120x",
      volumeLabel: "Volume: Lote de 100 Programas"
    },
    // Roadmap: se vazio, o código mostra “Nenhum update previsto.”
    updates: [],
    subtasks: [
      { id: "t1", title: "Leitura de Backups", completed: true },
      { id: "t2", title: "Algoritmo de Delta", completed: true },
      { id: "t3", title: "Visualizador 3D", completed: true },
      { id: "t4", title: "Relatórios Excel", completed: true },
    ],
  },

  {
    id: 7,
    title: "Central de Gestão",
    category: "Gestão & Web",
    client: "Engenharia & Mecânica",
    status: "ongoing",
    progress: 35,
    tech: ["HTML/CSS/JS", "Mobile", "Blazor"],
    description: "Plataforma Web para o gerenciamento do ciclo de vida de projetos na engenharia.",
    details:
      "Estou construindo este sistema para centralizar informações iniciais, gestão de dispositivos, marcos do projeto (Milestones) e dashboards. O foco é permitir a liberação de dispositivos para simulação. Comecei em HTML/JS e planejo a migração para Blazor.",
    myComment:
      "Comecei em HTML/CSS/JS puro para agilizar, e planejo migrar para Blazor assim que a hospedagem for liberada.",
    videoUrl: "Imagens-Portfolios/Central-Gestão.mp4",
    benchmark: null,
    // Se você não preencher updates, o script usa automaticamente as subtasks NÃO concluídas como roadmap.
    updates: null,
    subtasks: [
      { id: "t1", title: "Interface Web", completed: true },
      { id: "t2", title: "Design Review", completed: true },
      { id: "t3", title: "Dashboards KPI", completed: false },
      { id: "t4", title: "Migração Blazor", completed: false },
    ],
  },

  {
    id: 2,
    title: "PDL Remaker",
    category: "Automação",
    client: "Comau Tools",
    status: "completed",
    progress: 100,
    tech: ["C#", "WPF", "VS 2022"],
    description: "Corretor automático de código .pdl para garantir estabilidade dentro do Process Simulate.",
    details:
      "Projetei o algoritmo para ler o código do robô, pontuar possíveis erros com altíssima precisão e realizar as correções automaticamente. Integrei esta ferramenta com sucesso ao pacote Comau Tools.",
    myComment:
      "O diferencial aqui é a precisão altíssima na detecção. Ele não só aponta o erro, mas entrega o código corrigido.",
    videoUrl: "Imagens-Portfolios/PDL-Remaker.mp4",
    // Cenário: 440 robôs -> 20 min/robô manual / 2 min/robô app
    benchmark: {
      timeSaved: 90,
      manualTime: 8800,  // 440 * 20
      appTime: 880,      // 440 * 2
      annualSaving: "≈ 132h (lote 440 robôs)",
      roi: "10x",
      volumeLabel: "Volume: 440 Robôs"
    },
    updates: [],
    subtasks: [
      { id: "t1", title: "Parser .pdl", completed: true },
      { id: "t2", title: "Detecção Erros", completed: true },
      { id: "t3", title: "Correção Auto", completed: true },
      { id: "t4", title: "Integração Tools", completed: true },
    ],
  },

  {
    id: 8,
    title: "Corretor ABB",
    category: "Simulação",
    client: "Tecnomatix Int.",
    status: "completed",
    progress: 100,
    tech: ["C#", "WPF", "Tecnomatix API"],
    description: "Ferramenta de correção de código ABB integrada ao Process Simulate.",
    details:
      "Desenvolvi de forma semelhante ao PDL Remaker, mas focado em ABB e rodando integrado ao software da Siemens. Com este projeto, demonstrei a capacidade de criar plugins internos para o Process Simulate.",
    myComment:
      "A grande sacada foi inserir a ferramenta diretamente dentro do Process Simulate usando bibliotecas da Tecnomatix.",
    videoUrl: "Imagens-Portfolios/CorretorABB.mp4",
    // Cenário: 50 programas -> 4 min/prog manual / 30s (0.5min) app
    benchmark: {
      timeSaved: 88,
      manualTime: 200,  // 50 * 4
      appTime: 25,      // 50 * 0.5
      annualSaving: "≈ 2h 55m (lote 50 prog.)",
      roi: "8x",
      volumeLabel: "Volume: 50 Programas"
    },
    updates: [],
    subtasks: [
      { id: "t1", title: "API Tecnomatix", completed: true },
      { id: "t2", title: "Lógica ABB", completed: true },
      { id: "t3", title: "Interface WPF", completed: true },
    ],
  },

  {
    id: 3,
    title: "Decodificador Binário",
    category: "Engenharia Reversa",
    client: "Comau Tools",
    status: "ongoing",
    progress: 60,
    tech: ["C#", "WPF", "Leitura Binária"],
    description: "Leitor puro de códigos binários (.cod/.var) para eliminar a necessidade do WinCRC.",
    details:
      "Estou implementando a descriptografia e leitura direta de binários através de APIs para converter arquivos onde o código fonte foi perdido.",
    myComment:
      "Projeto com grau de dificuldade muito alta por envolver descriptografia e leitura binária pura.",
    videoUrl: "Imagens-Portfolios/Decodificador-CODVAR-Files.mp4",
    benchmark: null,
    updates: null,
    subtasks: [
      { id: "t1", title: "Eng. Reversa", completed: true },
      { id: "t2", title: "Descriptografia", completed: true },
      { id: "t3", title: "Conversão Texto", completed: false },
    ],
  },

  {
    id: 4,
    title: "Rebuild Cod/Var",
    category: "Robótica",
    client: "Comau Tools",
    status: "completed",
    progress: 100,
    tech: ["C#", "WPF", "VS 2022"],
    description: "Ferramenta para recálculo de trajetórias visando evitar colisões entre robôs.",
    details:
      "Criei uma lógica matemática que refaz o movimento do robô para garantir que a trajetória esteja livre de colisões. Foi desenvolvido para uma aplicação específica e depois integrei ao Comau Tools.",
    myComment:
      "Ferramenta criada para um cenário que precisava evitar colisão a todo custo.",
    videoUrl: "Imagens-Portfolios/Rebuild PDL.mp4",
    // Cenário: 100 códigos -> 3 min/código manual / 18s (0.3min) app
    benchmark: {
      timeSaved: 90,
      manualTime: 300, // 100*3
      appTime: 30,     // 100*0.3
      annualSaving: "≈ 4h 30m (lote 100 cód.)",
      roi: "10x",
      volumeLabel: "Volume: 100 Códigos"
    },
    updates: [],
    subtasks: [
      { id: "t1", title: "Cálculo Trajetória", completed: true },
      { id: "t2", title: "Detecção Colisão", completed: true },
      { id: "t3", title: "Novo Caminho", completed: true },
    ],
  },

  {
    id: 5,
    title: "Conversor .jt -> .cojt",
    category: "Conversão 3D",
    client: "Comau Tools",
    status: "completed",
    progress: 100,
    tech: ["C#", "WPF", "Automação"],
    description: "Utilitário que converte .jt para .cojt automatizando processos.",
    details:
      "Automatizei a preparação de arquivos 3D para a simulação, eliminando a necessidade dos scripts .bat instáveis que utilizávamos anteriormente.",
    myComment:
      "O objetivo principal foi substituir os arquivos .bat antigos que a Simulação usava. Criei algo robusto em C#.",
    videoUrl: "Imagens-Portfolios/jt--cojt.mp4",
    // Cenário: 100 arquivos -> 3 min/arq manual / 30s (0.5min) app
    benchmark: {
      timeSaved: 83,
      manualTime: 300,
      appTime: 50,
      annualSaving: "≈ 4h 10m (lote 100 arq.)",
      roi: "6x",
      volumeLabel: "Volume: 100 Arquivos"
    },
    updates: [],
    subtasks: [
      { id: "t1", title: "Leitura .jt", completed: true },
      { id: "t2", title: "Estrutura .cojt", completed: true },
      { id: "t3", title: "Automação Batch", completed: true },
    ],
  },

  {
    id: 1,
    title: "Central Arquivos Web",
    category: "Web & Infra",
    client: "Comau Interno",
    status: "completed",
    progress: 100,
    tech: ["React", "JSON", "HTML/CSS"],
    description: "Central web para organização de arquivos de estudos (.jt).",
    details:
      "Desenvolvi para organizar o fluxo de arquivos da rede. Serviu como base de aprendizado para ferramentas web atuais, embora tenha sido descontinuado por questões de infraestrutura.",
    myComment:
      "Foi meu primeiro projeto na Comau. O aprendizado técnico foi essencial.",
    videoUrl: "Imagens-Portfolios/Central-Arquivos-Web.mp4",
    benchmark: null,
    updates: [],
    subtasks: [
      { id: "t1", title: "React & JSON", completed: true },
      { id: "t2", title: "Interface Cliente", completed: true },
      { id: "t3", title: "Deploy", completed: true },
    ],
  },

  // =========================
  // SUGESTÕES FUTURAS (exemplo)
  // =========================
  {
    id: 99,
    title: "Auto-Layout Generator",
    category: "Sugestão Futura",
    client: "Planejamento",
    status: "suggestion",
    progress: 0,
    tech: ["AI", "Python"],
    description: "Geração automática de layout de fábrica baseada em fluxo produtivo.",
    details:
      "Proposta para utilizar algoritmos que sugerem posições ideais de robôs e estações baseadas no tempo de ciclo desejado, reduzindo semanas de estudo para poucas horas.",
    myComment: "Um passo em direção à engenharia generativa.",
    videoUrl: "",
    benchmark: null,
    updates: ["Fase: Pesquisa Conceitual", "Fase: Prototipagem (Python)"],
    subtasks: [],
  },
  {
    id: 100,
    title: "VR Safety Training",
    category: "Sugestão Futura",
    client: "Treinamento",
    status: "suggestion",
    progress: 0,
    tech: ["Unity", "VR"],
    description: "Treinamento imersivo de segurança em ambiente virtual.",
    details:
      "Proposta para criar um ambiente VR onde operadores podem simular situações de risco sem perigo real, com foco em retenção e prevenção de acidentes.",
    myComment: "Gamificação aplicada à segurança industrial.",
    videoUrl: "",
    benchmark: null,
    updates: ["Fase: Design Doc", "Fase: Escolha de Hardware"],
    subtasks: [],
  },
];

// =========================
// DOM
// =========================
const cardsGrid = document.getElementById("cardsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("projectModal");
const modalBackdrop = document.querySelector("[data-close-modal]");
const modalClose = document.getElementById("modalClose");
const modalCard = document.getElementById("modalCard");

// Views
const standardView = document.getElementById("standardView");
const analyticsView = document.getElementById("analyticsView");
const backToStandard = document.getElementById("backToStandard");
const canvas3DContainer = document.getElementById("canvas3DContainer");

// Modal elements
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalStatus = document.getElementById("modalStatus");
const modalClient = document.getElementById("modalClient");
const modalTech = document.getElementById("modalTech");
const modalDetails = document.getElementById("modalDetails");
const modalUpdates = document.getElementById("modalUpdates");
const modalTasks = document.getElementById("modalTasks");
const modalTaskSummary = document.getElementById("modalTaskSummary");
const modalComment = document.getElementById("modalComment");
const modalId = document.getElementById("modalId");

// Video
const modalVideoContainer = document.getElementById("modalVideoContainer");
const modalVideoEmpty = document.getElementById("modalVideoEmpty");
const modalVideo = document.getElementById("modalVideo");
const modalVideoSource = document.getElementById("modalVideoSource");

// Benchmark
const benchmarkSection = document.getElementById("benchmarkSection");
const benchmarkToggle = document.getElementById("benchmarkToggle");
const kpiSaving = document.getElementById("kpiSaving");
const kpiRoi = document.getElementById("kpiRoi");
const chartVolumeLabel = document.getElementById("chartVolumeLabel");
const analyticsTitle = document.getElementById("analyticsTitle");

// =========================
// STATE
// =========================

let currentFilter = "all";
let activeProject = null;

let cardVideoObserver = null;

// Chart.js
let chartInstance = null;

// Three.js
let scene, camera, renderer, animationId;
let manualParticles = [];
let appParticles = [];

// =========================
// RENDER CARDS
// =========================
function renderCards() {
  cardsGrid.innerHTML = "";

  const filtered = projectsData.filter((p) => {
    if (currentFilter === "all") return p.status !== "suggestion";
    return p.status === currentFilter;
  });

  if (filtered.length === 0) {
    cardsGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-secondary)">
      Nenhum item encontrado nesta categoria.
    </div>`;
    if (window.lucide) lucide.createIcons();
    return;
  }

  filtered.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = `${index * 50}ms`;

    // Status class para trilho/cor
    if (project.status === "completed") card.classList.add("completed");
    if (project.status === "ongoing") card.classList.add("ongoing");
    if (project.status === "suggestion") card.classList.add("suggestion");

    let statusText = "Em andamento";
    let statusIcon = "clock";
    let statusClass = "status-badge ongoing";
    let progressClass = "progress-fill ongoing";

    if (project.status === "completed") {
      statusText = "Concluído";
      statusIcon = "check-circle-2";
      statusClass = "status-badge completed";
      progressClass = "progress-fill completed";
    } else if (project.status === "suggestion") {
      statusText = "Sugestão";
      statusIcon = "lightbulb";
      statusClass = "status-badge suggestion";
      progressClass = "progress-fill suggestion";
    }

    const techTags = (project.tech || [])
      .slice(0, 3)
      .map((t) => `<span class="tech-pill">${t}</span>`)
      .join("");

    const hasVideo = !!(project.videoUrl && project.videoUrl.trim());
    const videoPreview = hasVideo
      ? `
        <div class="card-video" aria-hidden="true">
          <video class="card-video-el" data-card-video muted autoplay loop playsinline preload="metadata">
            <source src="${encodeURI(project.videoUrl)}" type="video/mp4">
          </video>
          <div class="card-video-badge"><span data-lucide="play" width="12"></span> Preview</div>
        </div>
      `
      : `
        <div class="card-video" aria-hidden="true">
          <div class="card-video-placeholder">
            <span data-lucide="image"></span>
            <div>Conceito</div>
          </div>
        </div>
      `;

    card.innerHTML = `
      <div class="status-rail"></div>
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
      ${videoPreview}
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

    card.addEventListener("click", () => openModal(project, card));
    cardsGrid.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
  setupCardVideoObserver();
}

function setupCardVideoObserver() {
  if (cardVideoObserver) cardVideoObserver.disconnect();

  const videos = document.querySelectorAll("video[data-card-video]");
  if (!videos.length) return;

  if (!("IntersectionObserver" in window)) {
    videos.forEach((v) => v.play().catch(() => {}));
    return;
  }

  cardVideoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!(target instanceof HTMLVideoElement)) return;
        if (isIntersecting) target.play().catch(() => {});
        else target.pause();
      });
    },
    { threshold: 0.35 }
  );

  videos.forEach((v) => cardVideoObserver.observe(v));
}

function pauseAllCardPreviews() {
  document.querySelectorAll("video[data-card-video]").forEach((v) => v.pause());
  if (cardVideoObserver) cardVideoObserver.disconnect();
}

// =========================
// MODAL
// =========================
function openModal(project, cardElement) {
  activeProject = project;
  pauseAllCardPreviews();

  // iOS zoom animation: calcula deslocamento do card até o centro da tela
  if (cardElement && modalCard) {
    const rect = cardElement.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;

    const translateX = cardCenterX - windowCenterX;
    const translateY = cardCenterY - windowCenterY;

    modalCard.style.setProperty("--start-x", `${translateX}px`);
    modalCard.style.setProperty("--start-y", `${translateY}px`);
    modalCard.style.setProperty("--start-scale", "0.5");
  }

  showStandardView();
  populateStandardData(project);

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (window.lucide) lucide.createIcons();
}

function populateStandardData(project) {
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;

  // Mantém compatível com seu texto atual
  modalDetails.textContent = project.details;

  modalComment.textContent = `"${project.myComment}"`;
  modalId.textContent = `PROJETO #${String(project.id).padStart(4, "0")}`;

  // Status badge
  let statusText = "Em Andamento";
  let statusClass = "status-badge ongoing";
  let icon = "clock";

  if (project.status === "completed") {
    statusText = "Concluído";
    statusClass = "status-badge completed";
    icon = "check-circle-2";
  } else if (project.status === "suggestion") {
    statusText = "Sugestão";
    statusClass = "status-badge suggestion";
    icon = "lightbulb";
  }

  modalStatus.className = statusClass;
  modalStatus.innerHTML = `<span data-lucide="${icon}"></span>${statusText}`;

  modalClient.innerHTML = `<span data-lucide="layers" width="14"></span> Cliente: <strong>${project.client}</strong>`;
  modalTech.innerHTML = (project.tech || []).map((t) => `<span class="tech-chip">${t}</span>`).join("");

  // Roadmap: usa project.updates se existir; se for null, usa subtasks pendentes como "roadmap" automático
  const pendingFromSubtasks = (project.subtasks || []).filter((t) => !t.completed).map((t) => t.title);
  const roadmap = Array.isArray(project.updates) ? project.updates : pendingFromSubtasks;

  modalUpdates.innerHTML = "";
  if (roadmap && roadmap.length > 0) {
    roadmap.forEach((u) => {
      modalUpdates.innerHTML += `<div class="update-item"><div class="update-dot"></div>${u}</div>`;
    });
  } else {
    modalUpdates.innerHTML = `<div style="font-size:13px;color:#888;font-style:italic">Nenhum update previsto.</div>`;
  }

  // Tasks
  modalTasks.innerHTML = "";
  const subtasks = project.subtasks || [];
  const doneCount = subtasks.filter((t) => t.completed).length;
  modalTaskSummary.textContent = subtasks.length ? `${doneCount}/${subtasks.length} Entregues` : "";

  subtasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <div class="task-check ${task.completed ? "completed" : ""}">
        ${task.completed ? '<span data-lucide="check" width="16"></span>' : ""}
      </div>
      <span class="task-title" style="opacity:${task.completed ? 1 : 0.6}">${task.title}</span>
    `;
    modalTasks.appendChild(div);
  });

  setupVideo(project);
  setupBenchmark(project);

  if (window.lucide) lucide.createIcons();
}

function setupVideo(project) {
  const hasVideo = !!(project.videoUrl && project.videoUrl.trim());

  if (!hasVideo) {
    modalVideo.pause();
    modalVideoSource.src = "";
    modalVideo.load();

    modalVideoContainer.style.display = "none";
    modalVideoEmpty.hidden = false;
    return;
  }

  modalVideoEmpty.hidden = true;
  modalVideoContainer.style.display = "block";

  modalVideo.muted = true;
  modalVideo.loop = true;
  modalVideo.autoplay = true;
  modalVideo.playsInline = true;

  modalVideoSource.src = encodeURI(project.videoUrl);
  modalVideo.load();
  modalVideo.currentTime = 0;
  modalVideo.play().catch(() => {});
}

function setupBenchmark(project) {
  if (!project.benchmark) {
    benchmarkSection.hidden = true;
    return;
  }
  benchmarkSection.hidden = false;
  benchmarkToggle.onclick = () => showAnalyticsView(project);
}

function showStandardView() {
  standardView.classList.remove("inactive");
  analyticsView.classList.remove("active");
  analyticsView.style.display = "none";

  stopThreeJS();
  destroyChart();

  // retoma vídeo
  if (activeProject && activeProject.videoUrl) {
    modalVideo.play().catch(() => {});
  }
}

function showAnalyticsView(project) {
  // troca views
  standardView.classList.add("inactive");
  analyticsView.style.display = "flex";
  requestAnimationFrame(() => analyticsView.classList.add("active"));

  // pausa vídeo
  modalVideo.pause();

  // KPIs
  kpiSaving.textContent = project.benchmark.annualSaving || "--";
  kpiRoi.textContent = project.benchmark.roi || "--";
  if (chartVolumeLabel) chartVolumeLabel.textContent = project.benchmark.volumeLabel || "Volume Comparativo (Tempo em Minutos)";
  if (analyticsTitle) analyticsTitle.textContent = project.title || "Performance Analytics";

  if (window.lucide) lucide.createIcons();

  // init chart + 3d
  setTimeout(() => {
    initChart(project.benchmark.manualTime, project.benchmark.appTime);
    initRaceVisual(canvas3DContainer);
  }, 250);
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  modalVideo.pause();
  modalVideoSource.src = "";
  modalVideo.load();

  stopThreeJS();
  destroyChart();

  setupCardVideoObserver();
}

// =========================
// ANALYTICS: Chart.js
// =========================
function initChart(manualTime, appTime) {
  destroyChart();

  const canvas = document.getElementById("performanceChart");
  if (!canvas || !window.Chart) return;

  Chart.defaults.color = "rgba(255,255,255,0.7)";
  Chart.defaults.font.family = "Manrope";

  const ctx = canvas.getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Manual", "Ferramenta"],
      datasets: [{
        label: "Tempo (Minutos)",
        data: [manualTime, appTime],
        backgroundColor: ["rgba(255, 59, 48, 0.7)", "rgba(52, 199, 89, 0.9)"],
        borderRadius: 8,
        barThickness: 60,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "rgba(255,255,255,0.1)", drawBorder: false },
          ticks: { color: "rgba(255,255,255,0.6)" },
        },
        x: {
          grid: { display: false },
          ticks: { color: "#fff", font: { weight: "bold" } },
        },
      },
    },
  });
}

function destroyChart() {
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }
}

// ===========================
// ANALYTICS: Three.js Visual
// ===========================
function initRaceVisual(container) {
  if (!container || !window.THREE) return;
  if (container.clientWidth === 0 || container.clientHeight === 0) return;

  stopThreeJS();

  manualParticles = [];
  appParticles = [];

  scene = new THREE.Scene();

  const w = container.clientWidth;
  const h = container.clientHeight;

  camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
  camera.position.set(0, 0, 18);

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  container.appendChild(renderer.domElement);

  const pathLength = 24;
  const startX = -12;

  // Manual path (curvo)
  const manualPoints = [];
  for (let i = 0; i <= 60; i++) {
    manualPoints.push(new THREE.Vector3(
      startX + (i * (pathLength / 60)),
      3 + Math.sin(i * 0.4) * 0.8,
      0
    ));
  }
  scene.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(manualPoints),
    new THREE.LineBasicMaterial({ color: 0xFF3B30, opacity: 0.3, transparent: true })
  ));

  // App path (reto)
  const appPoints = [new THREE.Vector3(startX, -1, 0), new THREE.Vector3(startX + pathLength, -1, 0)];
  scene.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(appPoints),
    new THREE.LineBasicMaterial({ color: 0x34C759, opacity: 0.3, transparent: true })
  ));

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(3), 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(3), 3));

  const particles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ size: 0.6, vertexColors: true, transparent: true, opacity: 0.9 })
  );
  scene.add(particles);

  const tick = () => {
    animationId = requestAnimationFrame(tick);

    if (Math.random() < 0.02) manualParticles.push({ progress: 0 });
    if (Math.random() < 0.15) appParticles.push({ x: startX });

    for (let i = 0; i < manualParticles.length; i++) {
      manualParticles[i].progress += 0.003;
      if (manualParticles[i].progress > 1) { manualParticles.splice(i, 1); i--; }
    }

    for (let i = 0; i < appParticles.length; i++) {
      appParticles[i].x += 0.4;
      if (appParticles[i].x > startX + pathLength) { appParticles.splice(i, 1); i--; }
    }

    const count = manualParticles.length + appParticles.length;
    if (count > 0) {
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      let ptr = 0;

      manualParticles.forEach((p) => {
        const idx = Math.floor(p.progress * 60);
        positions[ptr * 3] = startX + (idx * (pathLength / 60));
        positions[ptr * 3 + 1] = 3 + Math.sin(idx * 0.4) * 0.8;
        positions[ptr * 3 + 2] = 0;

        colors[ptr * 3] = 1.0;
        colors[ptr * 3 + 1] = 0.23;
        colors[ptr * 3 + 2] = 0.18;
        ptr++;
      });

      appParticles.forEach((p) => {
        positions[ptr * 3] = p.x;
        positions[ptr * 3 + 1] = -1;
        positions[ptr * 3 + 2] = 0;

        colors[ptr * 3] = 0.2;
        colors[ptr * 3 + 1] = 0.78;
        colors[ptr * 3 + 2] = 0.35;
        ptr++;
      });

      pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      pGeo.attributes.position.needsUpdate = true;
      pGeo.attributes.color.needsUpdate = true;
    }

    const time = Date.now() * 0.0005;
    camera.position.y = Math.sin(time) * 0.5;

    renderer.render(scene, camera);
  };

  tick();
}

function stopThreeJS() {
  if (animationId) cancelAnimationFrame(animationId);
  animationId = null;

  if (renderer) {
    try {
      renderer.dispose();
    } catch {}
  }

  if (renderer && renderer.domElement && renderer.domElement.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement);
  }

  scene = null;
  camera = null;
  renderer = null;
}

// =========================
// EVENTS
// =========================
if (backToStandard) backToStandard.addEventListener("click", showStandardView);

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderCards();
  });
});

// INIT
renderCards();
