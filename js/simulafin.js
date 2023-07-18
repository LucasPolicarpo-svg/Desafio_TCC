var etapas = document.getElementsByClassName("etapa");
    var etapaAtual = 0;
    var valorFinanciamento, taxaJuros, numParcelas;

    function proximo() {
      if (etapaAtual < etapas.length - 1) {
        etapas[etapaAtual].style.display = "none";
        etapaAtual++;
        etapas[etapaAtual].style.display = "block";
      } else {
        calcularFinanciamento();
      }
    }

    function anterior() {
      if (etapaAtual > 0) {
        etapas[etapaAtual].style.display = "none";
        etapaAtual--;
        etapas[etapaAtual].style.display = "block";
      }
    }

    function calcularFinanciamento() {
      valorFinanciamento = parseFloat(document.getElementById("valorFinanciamento").value);
      taxaJuros = parseFloat(document.getElementById("taxaJuros").value);
      numParcelas = parseInt(document.getElementById("numParcelas").value);

      var taxaMensal = taxaJuros / (12 * 100); // Taxa de juros mensal

      // Cálculo do financiamento utilizando o Sistema de Amortização Constante (SAC)
      var valorParcela = valorFinanciamento / numParcelas;
      var saldoDevedor = valorFinanciamento;
      var jurosTotal = 0;
      var amortizacaoTotal = 0;
      var parcelas = [];

      for (var i = 0; i < numParcelas; i++) {
        var juros = saldoDevedor * taxaMensal;
        var amortizacao = valorParcela - juros;
        saldoDevedor -= amortizacao;

        jurosTotal += juros;
        amortizacaoTotal += amortizacao;

        parcelas.push({
          numero: i + 1,
          valor: valorParcela.toFixed(2),
          juros: juros.toFixed(2),
          amortizacao: amortizacao.toFixed(2),
          saldoDevedor: saldoDevedor.toFixed(2)
        });
      }

      exibirResultado(parcelas, jurosTotal.toFixed(2), amortizacaoTotal.toFixed(2));
    }

    function exibirResultado(parcelas, jurosTotal, amortizacaoTotal) {
      var resultadoDiv = document.getElementById("resultado");

      var resultadoHTML = "";
      resultadoHTML += "<h3>Tabela de Amortização</h3>";
      resultadoHTML += "<table>";
      resultadoHTML += "<tr><th>Número</th><th>Valor da Parcela</th><th>Juros</th><th>Amortização</th><th>Saldo Devedor</th></tr>";

      for (var i = 0; i < parcelas.length; i++) {
        resultadoHTML += "<tr>";
        resultadoHTML += "<td>" + parcelas[i].numero + "</td>";
        resultadoHTML += "<td>" + parcelas[i].valor + "</td>";
        resultadoHTML += "<td>" + parcelas[i].juros + "</td>";
        resultadoHTML += "<td>" + parcelas[i].amortizacao + "</td>";
        resultadoHTML += "<td>" + parcelas[i].saldoDevedor + "</td>";
        resultadoHTML += "</tr>";
      }

      resultadoHTML += "</table>";

      resultadoHTML += "<p>Juros Totais: R$ " + jurosTotal + "</p>";
      resultadoHTML += "<p>Amortização Total: R$ " + amortizacaoTotal + "</p>";

      resultadoDiv.innerHTML = resultadoHTML;
      resultadoDiv.style.display = "block";
    }