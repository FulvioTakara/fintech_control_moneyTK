function enviarFormulario(event) {
    event.preventDefault();

    const data = document.getElementById('data').value;
    const valor = document.getElementById('valor').value;
    const local = document.getElementById('local').value;

    //Grafico
    var meuGrafico = new Chart(document.getElementById('meuGrafico'), {
        type: 'bar',
        data: {
            labels: ['Renda'],
            datasets: [{
                label: 'Dados do Formulário',
                data: [valor] // Número de ocorrências para cada dado
            }]
        }
    });

    meuGrafico.update();

    // tabela
    const tabela = document.getElementById('registro').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const cell1 = novaLinha.insertCell(0);
    const cell2 = novaLinha.insertCell(1);
    const cell3 = novaLinha.insertCell(2);
    const cell4 = novaLinha.insertCell(3);

    cell1.innerHTML = data;
    cell2.innerHTML = valor;
    cell3.innerHTML = local;
    cell4.innerHTML = `
        <button onclick="editarLinha(this)" class="submitable" style="background-image: url('../Imagens/lapis.png')"></button>
        <button onclick="apagarLinha(this)" style="background-image: url('../Imagens/lixeira.png')" class="submitable"></button>
    `;
}

// Função para editar uma linha da tabela
function editarLinha(botaoEditar) {
    const linha = botaoEditar.parentNode.parentNode;
    const celulaData = linha.cells[0];
    const celulaValor = linha.cells[1];
    const celulaLocal = linha.cells[2];
    const novaData = prompt('Nova data:', celulaData.innerHTML);
    const novoValor = prompt('Novo valor:', celulaValor.innerHTML);
    const novoLocal = prompt('Novo local:', celulaLocal.innerHTML);
    if (novaData && novoValor && novoLocal) {
        celulaData.innerHTML = novaData;
        celulaValor.innerHTML = novoValor;
        celulaLocal.innerHTML = novoLocal;
    }
}

// Função para apagar uma linha da tabela
function apagarLinha(botaoApagar) {
    const linha = botaoApagar.parentNode.parentNode;
    linha.remove();
}
