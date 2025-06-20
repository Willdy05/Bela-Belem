const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'docs')));

// Define rota para todas as páginas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// Rotas adicionais (ajuste conforme necessário)
app.get('/pacote', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'pacotes', 'pacote.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});