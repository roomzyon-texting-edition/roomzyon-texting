import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servera statiska filer från samma mapp
app.use(express.static(__dirname));

// Original RoomZyon Texting Edition Firebase (För Chatt och Rum)
const firebaseConfig = {
  apiKey: "AIzaSyAUc_WUxD1338PpAUm1xeFZwSAC-S1_hHc",
  authDomain: "roomzyon-texting-edition.firebaseapp.com",
  projectId: "roomzyon-texting-edition",
  storageBucket: "roomzyon-texting-edition.firebasestorage.app",
  messagingSenderId: "246071097603",
  appId: "1:246071097603:web:4b42f79af66c6ffd209136"
};

// NyxirCore Firebase (För Auth och Globala Användarprofiler)
const firebaseConfig_nyxirCore = {
  apiKey: "AIzaSyBraEVVYiuK3dpOv3_QF9qVv3ueQcQTzuA",
  authDomain: "nyxircore.firebaseapp.com",
  projectId: "nyxircore",
  storageBucket: "nyxircore.firebasestorage.app",
  messagingSenderId: "791317338261",
  appId: "1:791317338261:web:9ecc11d952cf792e11e39c"
};

app.get('/api/config', (req, res) => res.json(firebaseConfig));
app.get('/api/config/nyxir', (req, res) => res.json(firebaseConfig_nyxirCore));

// Huvudsida
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log('Server running on port ' + PORT));
