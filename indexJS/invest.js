function enviarFormulario(event) {
    event.preventDefault();

    const acao = document.getElementById('sigla').value;
    const dtAquisicao = document.getElementById('dataA').value;
    const qtdAcoes = document.getElementById('qtdAcoes').value;
    const totalAquisicao = document.getElementById('valorT').value;
    const plataforma = document.getElementById('local').value;

    //selecionando campos opcionais
    const qtdVendInput = document.getElementById('qtdVend');
    const qtdVend = qtsParcelasInput.value.trim() === '' ? 'Nada registrado' : qtdVendInput.value;
    const dtVendaInput = document.getElementById('dateV');
    const dtVenda = datapgParcelasInput.value.trim() === '' ? 'Nada registrado' : dtVendaInput.value;
    const vendaInput = document.getElementById('venda');
    const venda = qtsParcelasInput.value.trim() === '' ? 'Nada registrado' : vendaInput.value;

    // Adicionar calculos comparativos de objetivo e investimentos aplicados


    // tabela
    const tabela = document.getElementById('registro').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const cell1 = novaLinha.insertCell(0);
    const cell2 = novaLinha.insertCell(1);
    const cell3 = novaLinha.insertCell(2);
    const cell4 = novaLinha.insertCell(3);
    const cell5 = novaLinha.insertCell(4);
    const cell6 = novaLinha.insertCell(5);
    const cell7 = novaLinha.insertCell(6);
    const cell8 = novaLinha.insertCell(7);
    const cell9 = novaLinha.insertCell(8);

    cell1.innerHTML = acao;
    cell2.innerHTML = dtAquisicao;
    cell3.innerHTML = qtdAcoes;
    cell4.innerHTML = totalAquisicao;
    cell5.innerHTML = plataforma;
    cell6.innerHTML = qtdVend;
    cell7.innerHTML = dtVenda;
    cell8.innerHTML = venda;
    cell9.innerHTML = `
        <button onclick="editarLinha(this)" class="submitable" style="background-image: url('../Imagens/lapis.png')"></button>
        <button onclick="apagarLinha(this)" style="background-image: url('../Imagens/lixeira.png')" class="submitable"></button>
    `;
}

// Função para editar uma linha da tabela
function editarLinha(botaoEditar) {
    const linha = botaoEditar.parentNode.parentNode;
    const celulAcao = linha.cells[0];
    const celulaDtAquisicao = linha.cells[1];
    const celulaQtdAcoes = linha.cells[2];
    const celulaTotalAquisicao = linha.cells[3];
    const celulaPlataforma = linha.cells[4];
    const celulaQtdVend = linha.cells[5];
    const celulaDtVenda = linha.cells[6];
    const celulaVenda = linha.cells[7];


    const novaAcao = prompt('Nova ação:', celulAcao.innerHTML);
    const novoDtAquisicao = prompt('Nova aquisição:', celulaDtAquisicao.innerHTML);
    const novoQtdAcoes = prompt('Nova quantidade de ações:', celulaQtdAcoes.innerHTML);
    const novaTotalAquisicao = prompt('Novo total de aquisições:', celulaTotalAquisicao.innerHTML);
    const novaPlataforma = prompt('Nova plataforma:', celulaPlataforma.innerHTML);
    const novaQtdVend = prompt('Nova quantidade de vendas:', celulaQtdVend.innerHTML);
    const novaDtVenda = prompt('Nova data de venda:', celulaDtVenda.innerHTML);
    const novaVenda = prompt('Nova venda de:', celulaVenda.innerHTML);
    if (novaAcao && novoDtAquisicao && novoQtdAcoes && novaTotalAquisicao && novaPlataforma && novaQtdVend && novaDtVenda && novaVenda) {
        celulAcao.innerHTML = novaAcao;
        celulaDtAquisicao.innerHTML = novoDtAquisicao;
        celulaQtdAcoes.innerHTML = novoQtdAcoes;
        celulaTotalAquisicao.innerHTML = novaTotalAquisicao;
        celulaPlataforma.innerHTML = novaPlataforma;
        celulaQtdVend.innerHTML = novaQtdVend;
        celulaDtVenda.innerHTML = novaDtVenda;
        celulaVenda.innerHTML = novaVenda;
    }
}

// Função para apagar uma linha da tabela
function apagarLinha(botaoApagar) {
    const linha = botaoApagar.parentNode.parentNode;
    linha.remove();
}
