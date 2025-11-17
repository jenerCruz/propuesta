/* ===========================================================
   APLICACIÓN DE GESTIÓN DE VENTAS - app.js
   Versión corregida, estable y compatible con PWA Offline
   =========================================================== */

class SalesApp {
    constructor() {
        this.db = null;

        this.state = {
            view: "dashboard",
            loading: false,
            branches: [],
            promoters: [],
            goals: [],
            sales: [],
            isReady: false
        };
    }

    /* ===========================
       INICIALIZACIÓN PRINCIPAL
       =========================== */
    async init() {
        await this.initDB();
        await this.loadAllData();
        this.renderView("dashboard");
        this.updateNav();
        this.safeCreateIcons();
        this.initModalListeners();

        this.state.isReady = true;
    }

    /* ===========================
       INDEXEDDB
       =========================== */
    async initDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open("salesAppDB", 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                if (!db.objectStoreNames.contains("branches")) {
                    db.createObjectStore("branches", { keyPath: "id" });
                }
                if (!db.objectStoreNames.contains("promoters")) {
                    db.createObjectStore("promoters", { keyPath: "id" });
                }
                if (!db.objectStoreNames.contains("goals")) {
                    db.createObjectStore("goals", { keyPath: "id" });
                }
                if (!db.objectStoreNames.contains("sales")) {
                    db.createObjectStore("sales", { keyPath: "id" });
                }
            };

            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };

            request.onerror = () => reject(request.error);
        });
    }

    getStore(name, mode = "readonly") {
        const tx = this.db.transaction(name, mode);
        return tx.objectStore(name);
    }

    async getAll(store) {
        return new Promise((resolve) => {
            const req = this.getStore(store).getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => resolve([]);
        });
    }

    async save(store, data) {
        return new Promise((resolve) => {
            if (!data.id) data.id = crypto.randomUUID();
            const req = this.getStore(store, "readwrite").put(data);
            req.onsuccess = () => resolve(true);
            req.onerror = () => resolve(false);
        });
    }

    async delete(store, id) {
        return new Promise((resolve) => {
            const req = this.getStore(store, "readwrite").delete(id);
            req.onsuccess = () => resolve(true);
            req.onerror = () => resolve(false);
        });
    }

    async loadAllData() {
        this.state.branches = await this.getAll("branches");
        this.state.promoters = await this.getAll("promoters");
        this.state.goals = await this.getAll("goals");
        this.state.sales = await this.getAll("sales");
    }

    /* ===========================
       UTILIDADES
       =========================== */

    safeCreateIcons() {
        try {
            if (window.createIcons) window.createIcons();
        } catch (e) {}
    }

    showLoading(show = true) {
        const el = document.getElementById("loading-overlay");
        if (!el) return;
        el.classList.toggle("opacity-0", !show);
        el.classList.toggle("invisible", !show);
    }

    openModal(title, body) {
        document.getElementById("message-title").textContent = title;
        document.getElementById("message-body").textContent = body;

        const modal = document.getElementById("message-modal");
        modal.classList.remove("opacity-0", "invisible");
        modal.classList.add("open");
    }

    closeModal() {
        const modal = document.getElementById("message-modal");
        modal.classList.add("opacity-0", "invisible");
        modal.classList.remove("open");
    }

    initModalListeners() {
        const modal = document.getElementById("message-modal");
        const content = modal.querySelector(".modal-content");

        modal.addEventListener("click", () => this.closeModal());
        content.addEventListener("click", (e) => e.stopPropagation());
    }

    /* ===========================
       RENDERS
       =========================== */

    renderView(view) {
        this.state.view = view;
        this.updateNav();

        switch (view) {
            case "dashboard":
                this.renderDashboard();
                break;
            case "goals":
                this.renderGoals();
                break;
            case "sales":
                this.renderSales();
                break;
            case "productivity":
                this.renderProductivity();
                break;
            case "settings":
                this.renderSettings();
                break;
        }

        this.safeCreateIcons();
    }

    updateNav() {
        document.querySelectorAll(".nav-item").forEach((el) => {
            el.classList.toggle("active", el.dataset.view === this.state.view);
        });
    }

    /* ===========================
       RENDER: DASHBOARD
       =========================== */

    renderDashboard() {
        const content = document.getElementById("content");

        const totalSales = this.state.sales.length;
        const totalGoals = this.state.goals.length;

        content.innerHTML = `
          <h2 class="text-xl font-semibold mb-4">Resumen</h2>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-indigo-100 p-4 rounded-lg">
              <h3 class="text-lg font-bold">Ventas</h3>
              <p class="text-2xl">${totalSales}</p>
            </div>
            <div class="bg-green-100 p-4 rounded-lg">
              <h3 class="text-lg font-bold">Metas</h3>
              <p class="text-2xl">${totalGoals}</p>
            </div>
          </div>
        `;
    }

    /* ===========================
       RENDER: METAS
       =========================== */

    renderGoals() {
        const content = document.getElementById("content");

        content.innerHTML = `
            <h2 class="text-xl font-semibold mb-4">Metas</h2>

            <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg mb-3"
                onclick="app.addGoalForm()">
                Nueva Meta
            </button>

            <div class="space-y-3">
                ${this.state.goals.map(goal => `
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <p><strong>${goal.name}</strong></p>
                        <p>Objetivo: ${goal.amount}</p>
                    </div>
                `).join("")}
            </div>
        `;
    }

    addGoalForm() {
        const name = prompt("Nombre de meta:");
        const amount = prompt("Cantidad:");

        if (!name || !amount) return;

        this.save("goals", { id: crypto.randomUUID(), name, amount })
            .then(() => {
                this.loadAllData().then(() => this.renderGoals());
                this.openModal("Meta agregada", "La meta ha sido registrada exitosamente.");
            });
    }

    /* ===========================
       RENDER: VENTAS
       =========================== */

    renderSales() {
        const content = document.getElementById("content");

        content.innerHTML = `
            <h2 class="text-xl font-semibold mb-4">Ventas</h2>

            <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg mb-3"
                onclick="app.addSaleForm()">
                Registrar Venta
            </button>

            <div class="space-y-3">
                ${this.state.sales.map(sale => `
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <p><strong>${sale.product}</strong></p>
                        <p>Monto: $${sale.amount}</p>
                        <p>Fecha: ${sale.date}</p>
                    </div>
                `).join("")}
            </div>
        `;
    }

    addSaleForm() {
        const product = prompt("Producto:");
        const amount = prompt("Monto:");
        const date = prompt("Fecha (YYYY-MM-DD):", new Date().toISOString().split("T")[0]);

        if (!product || !amount) return;

        this.save("sales", { id: crypto.randomUUID(), product, amount, date })
            .then(() => {
                this.loadAllData().then(() => this.renderSales());
                this.openModal("Venta registrada", "La venta se ha guardado correctamente.");
            });
    }

    /* ===========================
       RENDER: PRODUCTIVIDAD
       =========================== */

    renderProductivity() {
        const content = document.getElementById("content");

        content.innerHTML = `
            <h2 class="text-xl font-semibold mb-4">Productividad</h2>

            <p class="text-gray-600 mb-4">
                Total de ventas registradas: <strong>${this.state.sales.length}</strong>
            </p>
        `;
    }

    /* ===========================
       RENDER: CONFIGURACIÓN
       =========================== */

    renderSettings() {
        const content = document.getElementById("content");

        content.innerHTML = `
            <h2 class="text-xl font-semibold mb-4">Configuración</h2>

            <button class="px-4 py-2 bg-red-600 text-white rounded-lg"
                onclick="app.resetData()">
                Resetear Datos
            </button>
        `;
    }

    resetData() {
        if (!confirm("¿Eliminar TODOS los datos?")) return;

        ["branches", "promoters", "goals", "sales"].forEach(store => {
            const os = this.getStore(store, "readwrite");
            os.clear();
        });

        this.loadAllData().then(() => {
            this.renderDashboard();
            this.openModal("Datos borrados", "Toda la información ha sido eliminada.");
        });
    }
}

/* ===========================
   ARRANQUE DE LA APP
   =========================== */
const app = new SalesApp();
window.app = app;
app.init();