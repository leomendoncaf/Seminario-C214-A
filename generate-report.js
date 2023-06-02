const fs = require('fs');
const path = require('path');
const { runCLI } = require('jest');

// Defina o caminho para o arquivo de relatório
const reportPath = path.join(__dirname, 'report.txt');

// Execute os testes
runTests();

async function runTests() {
  try {
    const { results } = await runCLI(
      {
        config: path.join(__dirname, 'jest.config.js'),
        silent: true,
        watchman: false,
      },
      [__dirname]
    );

    // Acesse os resultados dos testes para gerar o conteúdo do relatório
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
  // Você pode percorrer os resultados e extrair as informações relevantes para o relatório

  // Exemplo: Gere um relatório simples com o número de testes executados
  const totalTests = results.numTotalTests;
  const passedTests = results.numPassedTests;
  const failedTests = results.numFailedTests;

  const reportContent = `
    <h1>Relatório de Testes</h1>
    <p>Total de testes: ${totalTests}</p>
    <p>Testes passados: ${passedTests}</p>
    <p>Testes falhados: ${failedTests}</p>
  `;

  return reportContent;
}
