const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const app = express();

app.use(cors());
app.use(express.json());

// Carregar a planilha Excel
const workbook = xlsx.readFile('./users.xlsx'); // Certifique-se de que o caminho está correto
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const users = xlsx.utils.sheet_to_json(worksheet);

console.log(users); // Adicione isso para verificar se os dados estão sendo lidos corretamente

app.get('/api/users', (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
