// La configuración de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyCmTXzT0d5qr8TNm28zD9ShtYgTb-xHi28",
  authDomain: "mazoud-propiedades.firebaseapp.com",
  projectId: "mazoud-propiedades",
  storageBucket: "mazoud-propiedades.firebasestorage.app",
  messagingSenderId: "487069714795",
  appId: "1:487069714795:web:1a7c4c425eeff58467242e"
};

// Inicializamos Firebase con el formato clásico
firebase.initializeApp(firebaseConfig);

// Preparamos la base de datos y la autenticación para usarlas en admin.html
const auth = firebase.auth();
const db = firebase.firestore();