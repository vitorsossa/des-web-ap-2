let atletas = []; // Array para armazenar todos os atletas

// Função para exibir todos os atletas na página
function exibirAtletas(listaAtletas) {
    const atletasContainer = document.getElementById('atletas-container');
    atletasContainer.innerHTML = ''; // Limpa o conteúdo atual

    listaAtletas.forEach(atleta => {
        const divAtleta = document.createElement('div');
        divAtleta.classList.add('atleta');

        const img = document.createElement('img');
        img.src = atleta.imagem;
        img.alt = atleta.nome;

        const nome = document.createElement('h2');
        nome.textContent = atleta.nome;

        const posicao = document.createElement('p');
        posicao.textContent = `Posição: ${atleta.posicao}`;

        const descricao = document.createElement('p');
        descricao.textContent = atleta.descricao;

        divAtleta.appendChild(img);
        divAtleta.appendChild(nome);
        divAtleta.appendChild(posicao);
        divAtleta.appendChild(descricao);

        // Adiciona evento de passagem do mouse para cada atleta
        divAtleta.addEventListener('mouseover', function() {
            // Atualiza o URL com o ID do jogador
            history.pushState({}, '', `?id=${atleta.id}`);
        });

        atletasContainer.appendChild(divAtleta);
    });

    const voltarButton = document.createElement('button');
    voltarButton.textContent = 'Voltar';
    voltarButton.onclick = function() {
        window.location.href = 'principal.html';
    };
    atletasContainer.appendChild(voltarButton);
}

// Função para exibir o time masculino
function exibirTimeMasculino() {
    const atletasMasculinos = atletas.filter(atleta => atleta.elenco === 'masculino');
    exibirAtletas(atletasMasculinos);
}

// Função para exibir o time feminino
function exibirTimeFeminino() {
    const atletasFemininos = atletas.filter(atleta => atleta.elenco === 'feminino');
    exibirAtletas(atletasFemininos);
}

// Função para exibir o elenco completo
function exibirElencoCompleto() {
    exibirAtletas(atletas);
}

// Função para voltar para a página inicial
function voltarParaIndex() {
    window.location.href = 'index.html';
}

// Função para inicializar a página
function iniciarPagina() {
    // Obtém os dados dos atletas através da requisição
    const url = "https://botafogo-atletas.mange.li";
    fetch(`${url}/all`)
        .then(response => response.json())
        .then(data => {
            atletas = data; // Armazena os dados dos atletas

            // Adiciona eventos de clique aos botões
            const btnTimeMasculino = document.querySelector('button:nth-of-type(1)');
            btnTimeMasculino.addEventListener('click', exibirTimeMasculino);

            const btnTimeFeminino = document.querySelector('button:nth-of-type(2)');
            btnTimeFeminino.addEventListener('click', exibirTimeFeminino);

            const btnElencoCompleto = document.querySelector('button:nth-of-type(3)');
            btnElencoCompleto.addEventListener('click', exibirElencoCompleto);
        })
        .catch(error => {
            console.error('Erro ao obter os dados:', error);
        });
}

// Chama a função de inicialização quando a página carregar
window.onload = iniciarPagina;