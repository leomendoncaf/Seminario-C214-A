const fs = require('fs');
const path = require('path');
const { run } = require('jest');

// Defina o caminho para o arquivo de relatório
const reportPath = path.join(__dirname, 'report.txt');

// Execute os testes
runTests();

async function runTests() {
  try {
    await run([]);

    // Crie o conteúdo do relatório
    const reportContent = 'Este é o conteúdo do relatório.';

    // Escreva o conteúdo do relatório no arquivo
    fs.writeFileSync(reportPath, reportContent);

    // Exiba uma mensagem de sucesso
    console.log('Relatório gerado com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro ao executar os testes:', error);
  }
}