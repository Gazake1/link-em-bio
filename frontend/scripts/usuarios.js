let usuariosCache = [];
let currentPage = 1;
const limit = 10;

let searchTerm = "";
let filtroStatus = "";
let filtroRank = "";

/* =========================
   CARREGAR USUÁRIOS
========================= */
async function carregarUsuarios(page = 1) {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login.html";
    return;
  }

  currentPage = page;

  const params = new URLSearchParams({
    page,
    limit,
    search: searchTerm,
    status: filtroStatus,
    rank: filtroRank
  });

  const res = await fetch(`/api/admin/users?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    console.error("Erro ao carregar usuários");
    return;
  }

  const data = await res.json();

  usuariosCache = data.users; // 🔥 ESSENCIAL
  document.getElementById("total").textContent = data.total;

  renderizarTabela(data.users);
  criarPaginacao(data.totalPages, data.page);
}

/* =========================
   RENDER TABELA
========================= */
function renderizarTabela(users) {
  const tbody = document.getElementById("lista");
  tbody.innerHTML = "";

  users.forEach(user => {
    tbody.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.nome}</td>
        <td>${formatarData(user.data_nascimento)}</td>
        <td>${user.telefone || "-"}</td>
        <td>${user.email}</td>
        <td>${user.cpf}</td>
        <td>${user.frequencia}</td>
        <td>${user.rank}</td>
        <td>${user.status_cliente}</td>
        <td>${user.ultima_visita ? formatarData(user.ultima_visita) : "-"}</td>
        <td>
          <button class="btn edit" onclick="abrirModal(${user.id})">
            Editar
          </button>
        </td>
      </tr>
    `;
  });
}

/* =========================
   BUSCA
========================= */
function buscar(valor) {
  searchTerm = valor;
  carregarUsuarios(1);
}

/* =========================
   FILTROS
========================= */
function filtrar() {
  filtroStatus = document.getElementById("filter-status").value;
  filtroRank = document.getElementById("filter-rank").value;
  carregarUsuarios(1);
}

/* =========================
   MODAL
========================= */
function abrirModal(id) {
  const user = usuariosCache.find(u => u.id === id);
  if (!user) return;

  document.getElementById("edit-id").value = user.id;
  document.getElementById("edit-nome").value = user.nome;
  document.getElementById("edit-email").value = user.email;
  document.getElementById("edit-telefone").value = user.telefone || "";
  document.getElementById("edit-nascimento").value = user.data_nascimento?.split("T")[0];
  document.getElementById("edit-frequencia").value = user.frequencia;
  document.getElementById("edit-status").value = user.status_cliente;
  document.getElementById("edit-rank").value = user.rank;
  document.getElementById("edit-ultima_visita").value =
    user.ultima_visita?.split("T")[0] || "";

  document.getElementById("modalEditar").classList.remove("hidden");
}

function fecharModal() {
  document.getElementById("modalEditar").classList.add("hidden");
}

/* =========================
   SALVAR EDIÇÃO
========================= */
async function salvarEdicao() {
  const token = localStorage.getItem("token");
  const id = document.getElementById("edit-id").value;

  const body = {
    nome: document.getElementById("edit-nome").value,
    email: document.getElementById("edit-email").value,
    telefone: document.getElementById("edit-telefone").value,
    data_nascimento: document.getElementById("edit-nascimento").value,
    frequencia: Number(document.getElementById("edit-frequencia").value),
    status_cliente: document.getElementById("edit-status").value,
    rank: document.getElementById("edit-rank").value,
    ultima_visita: document.getElementById("edit-ultima_visita").value || null
  };

  await fetch(`/api/admin/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  });

  fecharModal();
  carregarUsuarios(currentPage);
}

/* =========================
   UTIL
========================= */
function formatarData(data) {
  return new Date(data).toLocaleDateString("pt-BR");
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login.html";
}

/* =========================
   INIT
========================= */
carregarUsuarios();
