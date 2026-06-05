import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFhxBU0WUZSeeua8thrAQ5asVXmyLndjA",
  authDomain: "climaetempo-21973.firebaseapp.com",
  projectId: "climaetempo-21973",
  storageBucket: "climaetempo-21973.firebasestorage.app",
  messagingSenderId: "740717498065",
  appId: "1:740717498065:web:ece90e48b6ed815be73ff0",
  measurementId: "G-7PQ5SDK35B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function salvarDado(valorDigitado) {
    try {
        const docRef = await addDoc(collection(db, "registros"), {
            item: valorDigitado,
            data: new Date()
        });
        console.log("Documento escrito com ID: ", docRef.id);
        alert("Salvo no Firebase com sucesso!");
    } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
    }
}

const ctx = document.getElementById('meuGrafico'); 

const meuGraficoInstancia = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        datasets: [{
            label: 'Precipitação (em mm)',
            data: [0, 20, 40, 60, 80, 100],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: .5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});