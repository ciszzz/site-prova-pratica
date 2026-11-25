const formulario = document.getElementById('form-calculadora');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    try {
        const partidas = parseInt(document.getElementById('partidas').value);
        const gols = parseInt(document.getElementById('gols').value);
        const assistencias = parseInt(document.getElementById('assistencias').value);

        if (
            document.getElementById('partidas').value === '' ||
            document.getElementById('gols').value === '' ||
            document.getElementById('assistencias').value === ''
        ) {
            throw new Error('Por favor, preencha todos os campos gatão.');
        }

        if (
            !Number.isInteger(partidas) ||
            !Number.isInteger(gols) ||
            !Number.isInteger(assistencias)
        ) {
            throw new Error('Por favor, insira apenas números inteiros gatão.');
        }

        if (partidas <= 0) {
            throw new Error('A quantidade de partidas deve ser maior que zero gatão.');
        }

        if (gols < 0 || assistencias < 0) {
            throw new Error('Gols e assistências não podem ser negativos gatão.');
        }

        const mediaGols = gols / partidas;
        const mediaAssistencias = assistencias / partidas;
        const participacoes = gols + assistencias;
        const mediaParticipacoes = participacoes / partidas;

        resultado.innerHTML = `
            <h3>Desempenho do craque!</h3>
            <p>Média de gols por partida: ${mediaGols.toFixed(2)}</p>
            <p>Média de assistências por partida: ${mediaAssistencias.toFixed(2)}</p>
            <p>Total de participações em gols: ${participacoes}</p>
            <p>Média de participações por partida: ${mediaParticipacoes.toFixed(2)}</p>
        `;

    } catch (erro) {
        resultado.innerHTML = `
            <p style="color: #ff4444;">
                Erro: ${erro.message}
            </p>
        `;
    }
});
