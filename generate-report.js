const fs = require('fs');
const path = require('path');
const { run } = require('jest');

// Defina o caminho para o arquivo de relatório
const reportPath = path.join(__dirname, 'report.txt');

// Execute os testes
runTests();

async function runTests() {
  try {
    const { results } = await run(['StackTest.test.js']); // Substitua o nome do arquivo de teste pelo nome correto

    // Crie o conteúdo do relatório com base nos resultados dos testes
    const reportContent = generateReportContent(results);

    // Escreva o conteúdo do relatório no arquivo
    fs.writeFileSync(reportPath, reportContent);

    // Exiba uma mensagem de sucesso
    console.log('Relatório gerado com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro ao executar os testes:', error);
  }
}

function generateReportContent(results) {
  // Implemente a lógica para gerar o conteúdo do relatório com base nos resultados dos testes
  // Você pode percorrer os resultados e extrair informações relevantes, como os resultados dos testes, estatísticas etc.
  // Por exemplo, você pode criar uma string com os resultados dos testes formatados.

  let reportContent = '';

  results.testResults.forEach((testResult) => {
    reportContent += `Test Suite: ${testResult.testFilePath}\n`;
    reportContent += `Total Tests: ${testResult.numTotalTests}\n`;
    reportContent += `Passed Tests: ${testResult.numPassedTests}\n`;
    reportContent += `Failed Tests: ${testResult.numFailedTests}\n`;
    reportContent += '\n';

    testResult.testResults.forEach((testCase) => {
      reportContent += `Test Case: ${testCase.fullName}\n`;
      reportContent += `Status: ${testCase.status}\n`;
      reportContent += `Duration: ${testCase.duration}ms\n`;
      reportContent += '\n';
    });

    reportContent += '\n';
  });

  return reportContent;
}
