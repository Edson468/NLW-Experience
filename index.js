const perguntas = [
    {
            pergunta: "O que é JavaScript?",
            respostas: [
                "Uma linguagem de programação de estilo orientado a objetos",
                "Um sistema operacional",
                "Um tipo de café",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
            respostas: [
                "Comparação de igualdade estrita (valor e tipo)",
                "Atribuição de valor",
                "Comparação de igualdade (valor)",
        ],
            correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
            respostas: [
                "var myVar;",
                "variable myVar;",
                "let myVar;",
        ],
            correta: 2
    },
    {
        pergunta: "O que é uma função em JavaScript?",
            respostas: [
                "Um tipo de dado",
                "Um objeto de estilo CSS",
                "Um bloco de código reutilizável",
        ],
            correta: 2
    },
    {
        pergunta: "Qual é a finalidade do método 'querySelector'?",
            respostas: [
                "Para selecionar elementos HTML pelo seu id",
                "Para fazer uma consulta em um banco de dados",
                "Para criar uma nova variável",
        ],
            correta: 0
    },
    {
        pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
            respostas: [
                "Uma linguagem de programação",
                "Uma representação da estrutura hierárquica de um documento HTML",
                "Um tipo de navegador da web",
        ],
            correta: 1
    },
    {
        pergunta: "Como você adiciona um evento de clique a um elemento HTML em JavaScript?",
            respostas: [
                "addEventListener('click', minhaFuncao)",
                "clickEvent(myFunction)",
                "onclick = minhaFuncao",
        ],
            correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de comentar um trecho de código em JavaScript?",
            respostas: [
                "// Este é um comentário",
                "<!-- Este é um comentário -->",
                "/* Este é um comentário */",
        ],
            correta: 2
    },
    {
        pergunta: "Qual é a saída do seguinte código: console.log(typeof 'hello');",
            respostas: [
                "String",
                "Number",
                "Boolean",
        ],
            correta: 0
    },
    {
        pergunta: "O que o método 'parseInt()' faz em JavaScript?",
            respostas: [
                "Converte uma string em um número inteiro",
                "Remove espaços em branco de uma string",
                "Converte uma string em letras minúsculas",
        ],
            correta: 0
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