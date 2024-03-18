const perguntas = [
    {
        pergunta: "Quantos times participam da fase de grupos da UEFA Champions League?",
        respostas: [
            "16 times",
            "24 times",
            "32 times",
        ],
        correta: 2
    },
    {
        pergunta: "Qual time possui o recorde de títulos da UEFA Champions League?",
        respostas: [
            "Barcelona",
            "Real Madrid",
            "Bayern de Munique",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o único clube a vencer a Champions League três vezes seguidas desde a mudança para o formato atual?",
        respostas: [
            "Bayern de Munique",
            "Barcelona",
            "Real Madrid",
        ],
        correta: 2
    },
    {
        pergunta: "Em que ano foi realizada a primeira final da UEFA Champions League?",
        respostas: [
            "1956",
            "1960",
            "1968",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o único clube a vencer a UEFA Champions League invicto?",
        respostas: [
            "Barcelona",
            "Bayern de Munique",
            "Ajax",
        ],
        correta: 2
    },
    {
        pergunta: "Qual jogador detém o recorde de mais gols marcados em uma única edição da UEFA Champions League?",
        respostas: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Robert Lewandowski",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o clube com mais participações consecutivas na UEFA Champions League?",
        respostas: [
            "Bayern de Munique",
            "Real Madrid",
            "Barcelona",
        ],
        correta: 0
    },
    {
        pergunta: "Quantas equipes se classificam para as oitavas de final da UEFA Champions League?",
        respostas: [
            "8 equipes",
            "12 equipes",
            "16 equipes",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o único país a ter três times na final da UEFA Champions League?",
        respostas: [
            "Espanha",
            "Itália",
            "Inglaterra",
        ],
        correta: 0
    },
    {
        pergunta: "Qual clube venceu a UEFA Champions League pela segunda vez em sua história em 2021?",
        respostas: [
            "Manchester City",
            "Chelsea",
            "Paris Saint-Germain",
        ],
        correta: 1
    },
];
//comando de como buscar uma variavel
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for ( const item of perguntas) {
    const quizitem = template.content.cloneNode(true)
    quizitem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizitem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value  == item.correta
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            } 
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        
        
        quizitem.querySelector('dl').appendChild(dt)


    }
    //remove a resposta "a" que aparece primeiro
    quizitem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizitem)
}
