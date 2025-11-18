// Importar Firebase desde la CDN (puedes usar npm si prefieres)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { 
  getFirestore, doc, setDoc, addDoc, collection, onSnapshot 
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { 
  getAuth, signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

/* ===========================
   FUNCIONES MODULARES
   =========================== */

// 🔹 Login de usuario
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuario autenticado:", userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
}

// 🔹 Guardar meta
export async function guardarMeta(meta) {
  try {
    await addDoc(collection(db, "metas"), meta);
    console.log("Meta guardada:", meta);
  } catch (error) {
    console.error("Error al guardar meta:", error);
  }
}

// 🔹 Guardar venta
export async function guardarVenta(venta) {
  try {
    await addDoc(collection(db, "ventas"), venta);
    console.log("Venta registrada:", venta);
  } catch (error) {
    console.error("Error al registrar venta:", error);
  }
}

// 🔹 Guardar promotor
export async function guardarPromotor(promotor) {
  try {
    await addDoc(collection(db, "promotores"), promotor);
    console.log("Promotor agregado:", promotor);
  } catch (error) {
    console.error("Error al agregar promotor:", error);
  }
}

// 🔹 Escuchar cambios en tiempo real (ejemplo: metas)
export function escucharMetas(callback) {
  onSnapshot(collection(db, "metas"), (snapshot) => {
    const metas = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(metas);
  });
}

// 🔹 Escuchar ventas
export function escucharVentas(callback) {
  onSnapshot(collection(db, "ventas"), (snapshot) => {
    const ventas = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(ventas);
  });
}

// 🔹 Escuchar promotores
export function escucharPromotores(callback) {
  onSnapshot(collection(db, "promotores"), (snapshot) => {
    const promotores = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(promotores);
  });
}
