function atualizar_dataset() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const origem = ss.getSheetByName("Responses");
  const destino = ss.getSheetByName("dataset");

  // pega todos os dados
  let dadosOrigem = origem.getDataRange().getValues();
  let dadosDestino = destino.getDataRange().getValues();

  // converte timestamps existentes para string
  let timestampsDestino = dadosDestino.map(linha => linha[0] ? linha[0].toString() : "");

  // filtra apenas as linhas novas
  let novasLinhas = dadosOrigem.filter(linha => !timestampsDestino.includes(linha[0] ? linha[0].toString() : ""));

  // adiciona as novas respostas no final
  if (novasLinhas.length > 0) {
    const ultimaLinha = destino.getLastRow();
    destino.getRange(ultimaLinha + 1, 1, novasLinhas.length, novasLinhas[0].length).setValues(novasLinhas);
  }
}
