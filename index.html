<!DOCTYPE html>  <html lang="es" class="h-full bg-slate-100">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Panel de Ventas y Metas</title>  
    <!--   
      Usamos TailwindCSS para un diseño rápido y sofisticado.  
      No es una API de lógica, solo una librería de estilos.  
    -->  
    <script src="https://cdn.tailwindcss.com"></script>  <!--   
  Usamos Chart.js para los gráficos.  
  Es la forma más sencilla de tener gráficos de barras y anillos.  
-->  
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>  

<style>  
    /* Estilos personalizados */  
    body {  
        font-family: 'Inter', sans-serif;  
    }  
    /* Estilos para pestañas activas e inactivas */  
    .tab-btn {  
        @apply px-4 py-3 text-sm font-medium text-center text-gray-500 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300;  
    }  
    .tab-btn.active {  
        @apply text-blue-600 border-b-2 border-blue-600;  
    }  
    .tab-content {  
        @apply p-4 md:p-6 bg-white rounded-lg shadow-md;  
    }  
</style>

</head>  
<body class="h-full text-slate-800">  <!-- Encabezado principal -->  
<header class="bg-slate-800 text-white shadow-lg">  
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">  
        <h1 class="text-2xl font-bold tracking-tight">Panel de Control de Ventas</h1>  
        <!-- Pequeño indicador de estado de la BD -->  
        <div id="db-status" class="text-xs text-red-400">Conectando a BD...</div>  
    </div>  
</header>  

<!-- Contenedor principal de la aplicación -->  
<main class="container mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 py-6">  

    <!-- Navegación de Pestañas -->  
    <div class="mb-4 border-b border-gray-200">  
        <ul class="flex flex-wrap -mb-px">  
            <li>  
                <button class="tab-btn active" id="tab-btn-dashboard" onclick="showTab('dashboard')">  
                    <svg class="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>  
                    Dashboard  
                </button>  
            </li>  
            <li>  
                <button class="tab-btn" id="tab-btn-metas" onclick="showTab('metas')">  
                    <svg class="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>  
                    Metas  
                </button>  
            </li>  
            <li>  
                <button class="tab-btn" id="tab-btn-ventas" onclick="showTab('ventas')">  
                    <svg class="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>  
                    Registro y Promotores  
                </button>  
            </li>  
        </ul>  
    </div>  

    <!-- Contenido de las Pestañas -->  

    <!-- Pestaña 1: Dashboard -->  
    <div id="dashboard" class="tab-content space-y-6">  
        <h2 class="text-xl font-semibold text-slate-700">Avances Generales (Mes Actual)</h2>  
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">  
            <!-- Gráfico de Barras: Avance por Producto -->  
            <div class="lg:col-span-2 bg-white p-4 rounded-lg shadow-inner border border-slate-200">  
                <h3 class="text-lg font-medium mb-3">Avance por Producto</h3>  
                <div class="h-64 md:h-80">  
                    <canvas id="barChart"></canvas>  
                </div>  
            </div>  
            <!-- Gráfico de Anillo: Meta General -->  
            <div class="bg-white p-4 rounded-lg shadow-inner border border-slate-200">  
                <h3 class="text-lg font-medium mb-3">Meta General del Mes</h3>  
                <div class="h-64 md:h-80 flex items-center justify-center relative">  
                    <canvas id="donutChart"></canvas>  
                    <div id="donut-percentage" class="absolute text-3xl font-bold text-slate-700">0%</div>  
                </div>  
            </div>  
        </div>  

        <!-- Tarjetas de Sucursales -->  
        <div>  
            <h2 class="text-xl font-semibold text-slate-700 mb-4">Avance por Sucursal (Mes Actual)</h2>  
            <div id="sucursal-cards-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">  
                <!-- Las tarjetas de sucursales se generarán aquí con JS -->  
                <p class="text-slate-500">Cargando datos de sucursales...</p>  
            </div>  
        </div>  
    </div>  

    <!-- Pestaña 2: Metas -->  
    <div id="metas" class="tab-content hidden space-y-6">  
        <h2 class="text-xl font-semibold text-slate-700">Establecer Metas Mensuales</h2>  
          
        <!-- Formulario de Metas -->  
        <form id="form-metas" class="grid grid-cols-1 md:grid-cols-5 gap-4 items-end p-4 bg-slate-50 rounded-lg border">  
            <div>  
                <label for="meta-mes" class="block text-sm font-medium text-gray-700">Mes</label>  
                <select id="meta-mes" name="mes" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">  
                    <!-- Opciones de mes generadas por JS -->  
                </select>  
            </div>  
            <div>  
                <label for="meta-sucursal" class="block text-sm font-medium text-gray-700">Sucursal</label>  
                <select id="meta-sucursal" name="sucursal" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">  
                    <!-- Opciones de sucursal generadas por JS -->  
                </select>  
            </div>  
            <div>  
                <label for="meta-producto" class="block text-sm font-medium text-gray-700">Producto</label>  
                <select id="meta-producto" name="producto" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">  
                    <!-- Opciones de producto generadas por JS -->  
                </select>  
            </div>  
            <div>  
                <label for="meta-cantidad" class="block text-sm font-medium text-gray-700">Meta (Piezas)</label>  
                <input type="number" id="meta-cantidad" name="meta" min="0" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Ej: 50">  
            </div>  
            <button type="submit" class="w-full md:w-auto text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">  
                Guardar Meta  
            </button>  
        </form>  

        <!-- Lista de Metas Establecidas -->  
        <div>  
            <h3 class="text-lg font-medium text-slate-700 mb-2">Metas Guardadas</h3>  
            <div class="max-h-96 overflow-y-auto rounded-lg border">  
                <table class="min-w-full divide-y divide-gray-200">  
                    <thead class="bg-gray-50">  
                        <tr>  
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mes</th>  
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sucursal</th>  
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>  
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meta</th>  
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>  
                        </tr>  
                    </thead>  
                    <tbody id="lista-metas" class="bg-white divide-y divide-gray-200">  
                        <!-- Filas generadas por JS -->  
                        <tr><td colspan="5" class="px-6 py-4 text-center text-slate-500">No hay metas guardadas.</td></tr>  
                    </tbody>  
                </table>  
            </div>  
        </div>  

    </div>  

    <!-- Pestaña 3: Registro y Promotores -->  
    <div id="ventas" class="tab-content hidden space-y-6">  
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">  
              
            <!-- Columna 1: Registro de Venta Diaria -->  
            <div class="lg:col-span-2 space-y-6">  
                <h2 class="text-xl font-semibold text-slate-700">Registro de Venta Diaria</h2>  
                <form id="form-ventas" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border">  
                    <div>  
                        <label for="venta-fecha" class="block text-sm font-medium text-gray-700">Fecha</label>  
                        <input type="date" id="venta-fecha" name="fecha" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required>  
                    </div>  
                    <div>  
                        <label for="venta-sucursal" class="block text-sm font-medium text-gray-700">Sucursal</label>  
                        <select id="venta-sucursal" name="sucursal" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required>  
                            <!-- Opciones de sucursal generadas por JS -->  
                        </select>  
                    </div>  
                    <div>  
                        <label for="venta-producto" class="block text-sm font-medium text-gray-700">Producto</label>  
                        <select id="venta-producto" name="producto" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required>  
                            <!-- Opciones de producto generadas por JS -->  
                        </select>  
                    </div>  
                     <div>  
                        <label for="venta-promotor" class="block text-sm font-medium text-gray-700">Promotor</label>  
                        <select id="venta-promotor" name="promotor" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required>  
                            <option value="">Seleccione un promotor...</option>  
                            <!-- Opciones de promotor generadas por JS -->  
                        </select>  
                    </div>  
                    <div class="md:col-span-2">  
                        <label for="venta-cantidad" class="block text-sm font-medium text-gray-700">Cantidad Vendida</label>  
                        <input type="number" id="venta-cantidad" name="cantidad" min="1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Ej: 5" required>  
                    </div>  
                    <div class="md:col-span-2">  
                        <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">  
                            Registrar Venta  
                        </button>  
                    </div>  
                </form>  

                <!-- Panel de Ventas Recientes -->  
                <div>  
                    <div class="flex justify-between items-center mb-2">  
                        <h3 class="text-lg font-medium text-slate-700">Ventas Registradas</h3>  
                        <!--   
                            NOTA: La vista de calendario es compleja.   
                            Por ahora, mostramos un panel/tabla de ventas.  
                            Se puede implementar un calendario con librerías como FullCalendar.  
                        -->  
                        <div>  
                            <button class="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-700 font-medium">Panel</button>  
                            <button class="px-3 py-1 text-sm rounded-md text-slate-500 hover:bg-slate-100" title="La vista de calendario es una futura mejora">Calendario</button>  
                        </div>  
                    </div>  
                    <div class="max-h-96 overflow-y-auto rounded-lg border">  
                        <table class="min-w-full divide-y divide-gray-200">  
                            <thead class="bg-gray-50">  
                                <tr>  
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>  
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sucursal</th>  
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>  
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cant.</th>  
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Promotor</th>  
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>  
                                </tr>  
                            </thead>  
                            <tbody id="lista-ventas" class="bg-white divide-y divide-gray-200">  
                                <!-- Filas generadas por JS -->  
                                <tr><td colspan="6" class="px-6 py-4 text-center text-slate-500">No hay ventas registradas.</td></tr>  
                            </tbody>  
                        </table>  
                    </div>  
                </div>  

            </div>  

            <!-- Columna 2: Gestión de Promotores -->  
            <div class="space-y-6">  
                <h2 class="text-xl font-semibold text-slate-700">Gestión de Promotores</h2>  
                <form id="form-promotores" class="p-4 bg-slate-50 rounded-lg border">  
                    <label for="promotor-nombre" class="block text-sm font-medium text-gray-700">Nombre del Promotor</label>  
                    <input type="text" id="promotor-nombre" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Ej: Juan Pérez" required>  
                    <button type="submit" class="mt-3 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">  
                        Agregar Promotor  
                    </button>  
                </form>  
                  
                <div>  
                    <h3 class="text-lg font-medium text-slate-700 mb-2">Lista de Promotores</h3>  
                    <div id="lista-promotores" class="max-h-60 overflow-y-auto space-y-2">  
                        <!-- Promotores generados por JS -->  
                        <p class="text-slate-500">Cargando promotores...</p>  
                    </div>  
                </div>  
            </div>  
        </div>  
    </div>  

</main>  

<!-- Notificación Toast -->  
<div id="toast" class="fixed bottom-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg text-white transition-all duration-300 opacity-0 translate-y-10">  
    <span id="toast-message"></span>  
</div>  

<!-- LÓGICA DE LA APLICACIÓN -->  
<script>  
    //   
    // DATOS MAESTROS (PREDEFINIDOS)  
    const SUCURSALES = [  
        "Coppel 363", "Coppel 385", "Coppel 716",  
        "Elektra 218", "Chedraui 23", "Chedraui 99", "Chedraui 105"  
    ];  

    const PRODUCTOS = [  
        "Amigo Kit", "CGI Cero", "Chip Express", "Portabilidad", "B63"  
    ];  
      
    const MESES = [  
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",  
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"  
    ];  

      
    // VARIABLES GLOBALES DE LA APP  
      
    let db; // Instancia de la base de datos IndexedDB  
    let barChartInstance;  
    let donutChartInstance;  
    const DB_NAME = "VentasAppDB";  
    const DB_VERSION = 1;  
    const STORES = {  
        METAS: "metas",  
        VENTAS: "ventas",  
        PROMOTORES: "promotores"  
    };  
    let promotoresCache = []; // Caché para nombres de promotores  
    // INICIALIZACIÓN DE LA APLICACIÓN  
     
    window.onload = () => {  
        initDB();  
        setTodayDate();  
        setupTabListeners();  
        setupFormListeners();  
    };  

    function setTodayDate() {  
        const today = new Date().toISOString().split('T')[0];  
        document.getElementById('venta-fecha').value = today;  
    }  

    // LÓGICA DE NAVEGACIÓN (PESTAÑAS)  
    function setupTabListeners() {  
        document.querySelectorAll('.tab-btn').forEach(btn => {  
            btn.addEventListener('click', () => {  
                const tabId = btn.id.replace('tab-btn-', '');  
                showTab(tabId);  
            });  
        });  
    }  

    function showTab(tabId) {  
        // Ocultar todo el contenido  
        document.querySelectorAll('.tab-content').forEach(content => {  
            content.classList.add('hidden');  
        });  
        // Quitar clase activa de todos los botones  
        document.querySelectorAll('.tab-btn').forEach(btn => {  
            btn.classList.remove('active');  
        });  

        // Mostrar contenido seleccionado  
        document.getElementById(tabId).classList.remove('hidden');  
        // Marcar botón como activo  
        document.getElementById(`tab-btn-${tabId}`).classList.add('active');  

        // Recargar datos si se va al dashboard  
        if (tabId === 'dashboard') {  
            loadDashboardData();  
        }  
    }  
    // MANEJO DE FORMULARIOs
//DE FORMULARIOS

function setupFormListeners() {  
        document.getElementById('form-metas').addEventListener('submit', handleAddMeta);  
        document.getElementById('form-promotores').addEventListener('submit', handleAddPromotor);  
        document.getElementById('form-ventas').addEventListener('submit', handleAddVenta);  
    } 
    // LÓGICA DE BASE DE DATOS (IndexedDB)  

    function initDB() {  
        const request = indexedDB.open(DB_NAME, DB_VERSION);  

        request.onerror = (event) => {  
            console.error("Error al abrir IndexedDB:", event.target.error);  
            updateDbStatus("Error de BD", true);  
        };  

        request.onsuccess = (event) => {  
            db = event.target.result;  
            updateDbStatus("BD Conectada", false);  
            // La BD está lista, cargar datos iniciales  
            startApp();  
        };  

        // Esto solo se ejecuta si la versión de la BD cambia (o es la primera vez)  
        request.onupgradeneeded = (event) => {  
            const db = event.target.result;  

            // Tienda de Promotores  
            if (!db.objectStoreNames.contains(STORES.PROMOTORES)) {  
                db.createObjectStore(STORES.PROMOTORES, { keyPath: 'id', autoIncrement: true });  
            }  

            // Tienda de Metas  
            if (!db.objectStoreNames.contains(STORES.METAS)) {  
                const metasStore = db.createObjectStore(STORES.METAS, { keyPath: 'id', autoIncrement: true });  
                // Índice para evitar metas duplicadas (mismo mes, sucursal y producto)  
                metasStore.createIndex('metaUnica', ['mes', 'sucursal', 'producto'], { unique: true });  
            }  

            // Tienda de Ventas  
            if (!db.objectStoreNames.contains(STORES.VENTAS)) {  
                const ventasStore = db.createObjectStore(STORES.VENTAS, { keyPath: 'id', autoIncrement: true });  
                ventasStore.createIndex('fecha', 'fecha', { unique: false });  
                ventasStore.createIndex('sucursal', 'sucursal', { unique: false });  
            }  
        };  
    }  

    function updateDbStatus(message, isError) {  
        const statusEl = document.getElementById('db-status');  
        statusEl.textContent = message;  
        statusEl.classList.toggle('text-red-400', isError);  
        statusEl.classList.toggle('text-green-400', !isError);  
    }  

    // Iniciar la carga de datos de la app  
    function startApp() {  
        populateAllSelects();  
        loadPromotores(); // Carga promotores y luego las ventas  
        loadMetas();  
        loadDashboardData(); // Carga el dashboard  
    }  
 
    // LÓGICA DE "SELECTS" (Dropdowns)   

    function populateAllSelects() {  
        const selectsMes = [document.getElementById('meta-mes')];  
        const selectsSucursal = [  
            document.getElementById('meta-sucursal'),  
            document.getElementById('venta-sucursal')  
        ];  
        const selectsProducto = [  
            document.getElementById('meta-producto'),  
            document.getElementById('venta-producto')  
        ];  

        // Poblar Meses  
        selectsMes.forEach(select => {  
            select.innerHTML = ''; // Limpiar  
            MESES.forEach((mes, index) => {  
                select.add(new Option(mes, index + 1)); // Usar 1-12 como valor  
            });  
            // Seleccionar mes actual en formulario de metas  
            select.value = new Date().getMonth() + 1;  
        });  

        // Poblar Sucursales  
        selectsSucursal.forEach(select => {  
            select.innerHTML = '<option value="">Seleccione sucursal...</option>'; // Limpiar  
            SUCURSALES.forEach(suc => select.add(new Option(suc, suc)));  
        });  

        // Poblar Productos  
        selectsProducto.forEach(select => {  
            select.innerHTML = '<option value="">Seleccione producto...</option>'; // Limpiar  
            PRODUCTOS.forEach(prod => select.add(new Option(prod, prod)));  
        });  
    }  
      
     
    // LÓGICA DE PROMOTORES (CRUD)    

    function handleAddPromotor(event) {  
        event.preventDefault();  
        const nombreInput = document.getElementById('promotor-nombre');  
        const nombre = nombreInput.value.trim();  

        if (!nombre) {  
            showToast("El nombre del promotor no puede estar vacío.", true);  
            return;  
        }  

        const transaction = db.transaction([STORES.PROMOTORES], 'readwrite');  
        const store = transaction.objectStore(STORES.PROMOTORES);  
        const request = store.add({ nombre: nombre });  

        request.onsuccess = () => {  
            showToast("Promotor agregado exitosamente.");  
            nombreInput.value = '';  
            loadPromotores(); // Recargar listas  
        };  

        request.onerror = (e) => {  
            showToast("Error al agregar promotor.", true);  
            console.error(e.target.error);  
        };  
    }  

    async function loadPromotores() {  
        const promotores = await getAllFromDB(STORES.PROMOTORES);  
        promotoresCache = promotores; // Actualizar caché  

        const listaEl = document.getElementById('lista-promotores');  
        const selectEl = document.getElementById('venta-promotor');  

        listaEl.innerHTML = '';  
        selectEl.innerHTML = '<option value="">Seleccione un promotor...</option>';  

        if (promotores.length === 0) {  
            listaEl.innerHTML = '<p class="text-slate-500 text-sm">No hay promotores registrados.</p>';  
            loadVentas(); // Cargar ventas aunque no haya promotores  
            return;  
        }  

        promotores.forEach(p => {  
            // Agregar a la lista de gestión  
            const div = document.createElement('div');  
            div.className = 'flex justify-between items-center bg-white p-2 rounded-lg border';  
            div.innerHTML = `  
                <span class="text-sm">${p.nombre}</span>  
                <button class="text-red-500 hover:text-red-700 text-xs" onclick="deleteItem(${STORES.PROMOTORES}, ${p.id}, loadPromotores)">  
                    Eliminar  
                </button>  
            `;  
            listaEl.appendChild(div);  

            // Agregar al select de ventas  
            selectEl.add(new Option(p.nombre, p.id));  
        });  
          
        // Cargar ventas DESPUÉS de tener el caché de promotores  
        loadVentas();  
    }    
    // LÓGICA DE METAS (CRUD)  
          
    function handleAddMeta(event) {  
        event.preventDefault();  
        const form = event.target;  
        const meta = {  
            mes: form.mes.value,  
            sucursal: form.sucursal.value,  
            producto: form.producto.value,  
            meta: parseInt(form.meta.value)  
        };  

        if (!meta.mes || !meta.sucursal || !meta.producto || !meta.meta || meta.meta <= 0) {  
            showToast("Todos los campos son obligatorios y la meta debe ser positiva.", true);  
            return;  
        }  
          
        // Convertir mes a número para guardarlo consistentemente  
        meta.mes = parseInt(meta.mes);  

        const transaction = db.transaction([STORES.METAS], 'readwrite');  
        const store = transaction.objectStore(STORES.METAS);  
        const request = store.add(meta);  

        request.onsuccess = () => {  
            showToast("Meta guardada exitosamente.");  
            form.reset();  
            // Restaurar mes actual  
            document.getElementById('meta-mes').value = new Date().getMonth() + 1;  
            loadMetas(); // Recargar lista de metas  
            loadDashboardData(); // Actualizar dashboard  
        };  

        request.onerror = (e) => {  
            if (e.target.error.name === 'ConstraintError') {  
                showToast("Ya existe una meta para ese mes, sucursal y producto.", true);  
            } else {  
                showToast("Error al guardar la meta.", true);  
                console.error(e.target.error);  
            }  
        };  
    }  

    async function loadMetas() {  
        const metas = await getAllFromDB(STORES.METAS);  
        const tbody = document.getElementById('lista-metas');  
        tbody.innerHTML = '';  

        if (metas.length === 0) {  
            tbody.innerHTML = '<tr><td colspan="5" class="px-6 py-4 text-center text-slate-500">No hay metas guardadas.</td></tr>';  
            return;  
        }  

        // Ordenar para mejor visualización  
        metas.sort((a, b) => a.mes - b.mes || a.sucursal.localeCompare(b.sucursal));  

        metas.forEach(m => {  
            const tr = document.createElement('tr');  
            tr.innerHTML = `  
                <td class="px-6 py-4 whitespace-nowrap text-sm">${MESES[m.mes - 1]}</td>  
                <td class="px-6 py-4 whitespace-nowrap text-sm">${m.sucursal}</td>  
                <td class="px-6 py-4 whitespace-nowrap text-sm">${m.producto}</td>  
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">${m.meta}</td>  
                <td class="px-6 py-4 whitespace-nowrap text-sm">  
                    <button class="text-red-500 hover:text-red-700" onclick="deleteItem('${STORES.METAS}', ${m.id}, loadMetas)">  
                        Eliminar  
                    </button>  
                </td>  
            `;  
            tbody.appendChild(tr);  
        });  
    }  
    
    // LÓGICA DE VENTAS (CRUD)    

    function handleAddVenta(event) {  
        event.preventDefault();  
        const form = event.target;  
        const venta = {  
            fecha: form.fecha.value,  
            sucursal: form.sucursal.value,  
            producto: form.producto.value,  
            promotorId: parseInt(form.promotor.value),  
            cantidad: parseInt(form.cantidad.value)  
        };  

        if (!venta.fecha || !venta.sucursal || !venta.producto || !venta.promotorId || !venta.cantidad || venta.cantidad <= 0) {  
            showToast("Todos los campos son obligatorios y la cantidad debe ser positiva.", true);  
            return;  
        }  
          
        const transaction = db.transaction([STORES.VENTAS], 'readwrite');  
        const store = transaction.objectStore(STORES.VENTAS);  
        const request = store.add(venta);  

        request.onsuccess = () => {  
            showToast("Venta registrada exitosamente.");  
            // No resetear fecha, pero sí el resto  
            form.producto.value = "";  
            form.promotor.value = "";  
            form.cantidad.value = "";  
            form.producto.focus(); // Mover foco a producto  
              
            loadVentas(); // Recargar lista de ventas  
            loadDashboardData(); // Actualizar dashboard  
        };  

        request.onerror = (e) => {  
            showToast("Error al registrar la venta.", true);  
            console.error(e.target.error);  
        };  
    }  

    async function loadVentas() {  
        const ventas = await getAllFromDB(STORES.VENTAS);  
        const tbody = document.getElementById('lista-ventas');  
        tbody.innerHTML = '';  

        if (ventas.length === 0) {  
            tbody.innerHTML = '<tr><td colspan="6" class="px-6 py-4 text-center text-slate-500">No hay ventas registradas.</td></tr>';  
            return;  
        }  

        // Ordenar por fecha descendente  
        ventas.sort((a, b) => b.fecha.localeCompare(a.fecha));  

        // Usar el caché de promotores  
        const promotorMap = new Map(promotoresCache.map(p => [p.id, p.nombre]));  

        ventas.forEach(v => {  
            const tr = document.createElement('tr');  
            const nombrePromotor = promotorMap.get(v.promotorId) || 'Desconocido';  
            tr.innerHTML = `  
                <td class="px-6 py-4 whitespace-nowrap text-sm">${v.fecha}</td>  
                <td class="px-6 py-4 whitespace-nowrap text-sm">${v.sucursal}</td>  
                <td class="px-6 py-4 whitespace-nowrap text-sm">${v.producto}</td>  
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">${v.cantidad}</td>  
                <td class="px-6 py-4 whitespace-nowrap text-sm">${nombrePromotor}</td>  
                <td class="px-6 py-4 whitespace-nowrap text-sm">  
                    <button class="text-red-500 hover:text-red-700" onclick="deleteItem('${STORES.VENTAS}', ${v.id}, loadVentas)">  
                        Eliminar  
                    </button>  
                </td>  
            `;  
            tbody.appendChild(tr);  
        });  
    }  
      
    // ------------------------------------------------------------------  
    // LÓGICA DEL DASHBOARD (Gráficos y Tarjetas)  
    // ------------------------------------------------------------------  

    async function loadDashboardData() {  
        if (!db) return; // Salir si la BD no está lista  

        const currentMonth = new Date().getMonth() + 1; // 1-12  
        const currentYear = new Date().getFullYear();  

        // Usar promesas para obtener todos los datos  
        const [allMetas, allVentas] = await Promise.all([  
            getAllFromDB(STORES.METAS),  
            getAllFromDB(STORES.VENTAS)  
        ]);  

        // Filtrar datos para el mes y año actual  
        const metasMes = allMetas.filter(m => m.mes === currentMonth);  
        const ventasMes = allVentas.filter(v => {  
            const vDate = new Date(v.fecha);  
            return vDate.getMonth() + 1 === currentMonth && vDate.getFullYear() === currentYear;  
        });  
          
        // 1. Procesar datos para gráficos  
        let totalMetaGeneral = 0;  
        let totalVentaGeneral = 0;  
        const dataPorProducto = {};  
          
        // Inicializar con todos los productos  
        PRODUCTOS.forEach(p => {  
            dataPorProducto[p] = { meta: 0, venta: 0 };  
        });  

        metasMes.forEach(m => {  
            totalMetaGeneral += m.meta;  
            if (dataPorProducto[m.producto]) {  
                dataPorProducto[m.producto].meta += m.meta;  
            }  
        });  

        ventasMes.forEach(v => {  
            totalVentaGeneral += v.cantidad;  
            if (dataPorProducto[v.producto]) {  
                dataPorProducto[v.producto].venta += v.cantidad;  
            }  
        });  
          
        // Renderizar Gráficos  
        renderBarChart(dataPorProducto);  
        renderDonutChart(totalVentaGeneral, totalMetaGeneral);  

        // 2. Procesar datos para tarjetas de sucursal  
        const dataPorSucursal = {};  
        SUCURSALES.forEach(s => {  
            dataPorSucursal[s] = { meta: 0, venta: 0 };  
        });  

        metasMes.forEach(m => {  
            if (dataPorSucursal[m.sucursal]) {  
                dataPorSucursal[m.sucursal].meta += m.meta;  
            }  
        });  
          
        ventasMes.forEach(v => {  
            if (dataPorSucursal[v.sucursal]) {  
                dataPorSucursal[v.sucursal].venta += v.cantidad;  
            }  
        });  

        // Renderizar Tarjetas  
        renderSucursalCards(dataPorSucursal);  
    }  

    function renderBarChart(data) {  
        const ctx = document.getElementById('barChart').getContext('2d');  
        const labels = Object.keys(data);  
        const metasData = labels.map(p => data[p].meta);  
        const ventasData = labels.map(p => data[p].venta);  

        if (barChartInstance) {  
            barChartInstance.destroy();  
        }  

        barChartInstance = new Chart(ctx, {  
            type: 'bar',  
            data: {  
                labels: labels,  
                datasets: [  
                    {  
                        label: 'Meta',  
                        data: metasData,  
                        backgroundColor: 'rgba(203, 213, 225, 1)', // slate-300  
                        borderColor: 'rgba(100, 116, 139, 1)', // slate-500  
                        borderWidth: 1  
                    },  
                    {  
                        label: 'Venta',  
                        data: ventasData,  
                        backgroundColor: 'rgba(37, 99, 235, 1)', // blue-600  
                        borderColor: 'rgba(29, 78, 216, 1)', // blue-700  
                        borderWidth: 1  
                    }  
                ]  
            },  
            options: {  
                responsive: true,  
                maintainAspectRatio: false,  
                scales: {  
                    y: { beginAtZero: true }  
                }  
            }  
        });  
    }  
      
    function renderDonutChart(venta, meta) {  
        const ctx = document.getElementById('donutChart').getContext('2d');  
        const total = Math.max(meta, venta); // El 100% es la meta (o la venta si la supera)  
        const porcentaje = (meta === 0) ? 0 : Math.round((venta / meta) * 100);  
          
        const data = {  
            labels: ['Alcanzado', 'Faltante'],  
            datasets: [{  
                data: [venta, Math.max(0, meta - venta)],  
                backgroundColor: [  
                    'rgba(37, 99, 235, 1)', // blue-600  
                    'rgba(226, 232, 240, 1)' // slate-200  
                ],  
                borderColor: '#ffffff',  
                borderWidth: 2  
            }]  
        };  

        if (donutChartInstance) {  
            donutChartInstance.destroy();  
        }  

        donutChartInstance = new Chart(ctx, {  
            type: 'doughnut',  
            data: data,  
            options: {  
                responsive: true,  
                maintainAspectRatio: false,  
                cutout: '70%',  
                plugins: {  
                    legend: { display: false }  
                }  
            }  
        });  

        // Actualizar texto de porcentaje  
        document.getElementById('donut-percentage').textContent = `${porcentaje}%`;  
        document.getElementById('donut-percentage').classList.toggle('text-green-600', porcentaje >= 100);  
       Actualizar texto de porcentaje
document.getElementById('donut-percentage').textContent = ${porcentaje}%;
document.getElementById('donut-percentage').classList.toggle('text-green-600', porcentaje >= 100);
document.getElementById('donut-percentage').classList.toggle('text-slate-700', porcentaje < 100);
}

function renderSucursalCards(data) {  
        const container = document.getElementById('sucursal-cards-container');  
        container.innerHTML = ''; // Limpiar  

        if (Object.keys(data).length === 0) {  
            container.innerHTML = '<p class="text-slate-500">No hay datos de sucursales.</p>';  
            return;  
        }  

        for (const sucursal in data) {  
            const d = data[sucursal];  
            const porcentaje = (d.meta === 0) ? 0 : Math.round((d.venta / d.meta) * 100);  
            const progressColor = porcentaje >= 100 ? 'bg-green-500' : 'bg-blue-500';  

            const card = document.createElement('div');  
            card.className = 'bg-white p-4 rounded-lg shadow-md border';  
            card.innerHTML = `  
                <h4 class="font-semibold text-slate-700">${sucursal}</h4>  
                <div class="text-xs text-slate-500 mb-2">  
                    ${d.venta.toLocaleString()} / ${d.meta.toLocaleString()} Piezas  
                </div>  
                <div class="w-full bg-slate-200 rounded-full h-2.5">  
                    <div class="${progressColor} h-2.5 rounded-full" style="width: ${Math.min(porcentaje, 100)}%"></div>  
                </div>  
                <div class="text-right text-sm font-medium mt-1 ${porcentaje >= 100 ? 'text-green-600' : 'text-slate-600'}">  
                    ${porcentaje}%  
                </div>  
            `;  
            container.appendChild(card);  
        }  
    }  
      
    // ------------------------------------------------------------------  
    // FUNCIONES AUXILIARES (Genéricas)  
    // ------------------------------------------------------------------  
      
    // Función genérica para obtener todos los registros de una tienda  
    function getAllFromDB(storeName) {  
        return new Promise((resolve, reject) => {  
            if (!db) {  
                reject("La base de datos no está inicializada.");  
                return;  
            }  
            const transaction = db.transaction([storeName], 'readonly');  
            const store = transaction.objectStore(storeName);  
            const request = store.getAll();  

            request.onsuccess = () => resolve(request.result);  
            request.onerror = (e) => reject(e.target.error);  
        });  
    }  
      
    // Función genérica para eliminar un item  
    function deleteItem(storeName, id, callbackOnSuccess) {  
        // Usar el modal de confirmación  
        if (!confirm('¿Estás seguro de que deseas eliminar este registro? Esta acción no se puede deshacer.')) {  
            return;  
        }  

        const transaction = db.transaction([storeName], 'readwrite');  
        const store = transaction.objectStore(storeName);  
        const request = store.delete(id);  

        request.onsuccess = () => {  
            showToast("Registro eliminado.");  
            if (callbackOnSuccess) {  
                callbackOnSuccess();  
            }  
            // Si eliminamos algo, el dashboard puede cambiar  
            loadDashboardData();  
        };  
        request.onerror = (e) => {  
            showToast("Error al eliminar el registro.", true);  
            console.error(e.target.error);  
        };  
    }  

    // Mostrar notificaciones (Toast)  
    function showToast(message, isError = false) {  
        const toast = document.getElementById('toast');  
        const toastMessage = document.getElementById('toast-message');  

        toastMessage.textContent = message;  
        toast.classList.toggle('bg-red-500', isError);  
        toast.classList.toggle('bg-gray-800', !isError);  

        // Animar entrada  
        toast.classList.remove('opacity-0', 'translate-y-10');  
        toast.classList.add('opacity-100', 'translate-y-0');  

        // Ocultar después de 3 segundos  
        setTimeout(() => {  
            toast.classList.remove('opacity-100', 'translate-y-0');  
            toast.classList.add('opacity-0', 'translate-y-10');  
        }, 3000);  
    }  

</script>

</body>  
</html>
