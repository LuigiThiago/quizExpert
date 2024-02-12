const perguntas = [
  {
    pergunta: "Qual é o nome completo de Taylor Swift?",
    respostas: [
      "A) Taylor Marie Swift",
      "B) Taylor Alison Swift",
      "C) Taylor Elizabeth Swift",
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi o álbum de estreia de Taylor Swift?",
    respostas: [
      "A) Speak Now",
      "B) Fearless",
      "C) Taylor Swift",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do primeiro single de Taylor Swift?",
    respostas: [
      "A) Love Story",
      "B) Tim McGraw",
      "C) Our Song",
    ],
    correta: 1
  },
  {
    pergunta: "Quantos prêmios Grammy Taylor Swift já ganhou até 2022?",
    respostas: [
      "A) 8",
      "B) 10",
      "C) 11",
    ],
    correta: 2
  },
  {
    pergunta: "Em que ano Taylor Swift nasceu?",
    respostas: [
      "A) 1987",
      "B) 1989",
      "C) 1990",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do álbum de Taylor Swift lançado em 2020?",
    respostas: [
      "A) Reputation",
      "B) Lover",
      "C) Folklore",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do irmão de Taylor Swift?",
    respostas: [
      "A) Austin Swift",
      "B) Scott Swift",
      "C) Jake Swift",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o signo do zodíaco de Taylor Swift?",
    respostas: [
      "A) Virgem",
      "B) Sagitário",
      "C) Áries",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do documentário sobre Taylor Swift lançado em 2020?",
    respostas: [
      "A) Miss Americana",
      "B) The Swift Life",
      "C) Speak Now",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a altura aproximada de Taylor Swift?",
    respostas: [
      "A) 1,63 m",
      "B) 1,70 m",
      "C) 1,78 m",
    ],
    correta: 1
  },
];

  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }  
      
      quizItem.querySelector('dl').appendChild(dt)
  
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a perguta na tel
    quiz.appendChild(quizItem)
  }