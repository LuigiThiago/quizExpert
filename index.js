const perguntas = [
  {
    pergunta: "Qual é o nome completo do personagem principal?",
    respostas: [
      "A) Harry James Potter",
      "B) Harry Sirius Potter",
      "C) Harry Severus Potter",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a casa de Hogwarts à qual Harry Potter pertence?",
    respostas: [
      "A) Grifinória",
      "B) Sonserina",
      "C) Corvinal",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o melhor amigo de Harry Potter?",
    respostas: [
      "A) Hermione Granger",
      "B) Ron Weasley",
      "C) Draco Malfoy",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a forma do Patrono de Harry Potter?",
    respostas: [
      "A) Leão",
      "B) Veado",
      "C) Águia",
    ],
    correta: 1
  },
  {
    pergunta: "Quem matou os pais de Harry Potter?",
    respostas: [
      "A) Voldemort",
      "B) Snape",
      "C) Bellatrix Lestrange",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do elfo doméstico que serve à família Malfoy?",
    respostas: [
      "A) Dobby",
      "B) Kreacher",
      "C) Winky",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a posição de quadribol de Harry Potter?",
    respostas: [
      "A) Apanhador",
      "B) Batedor",
      "C) Goleiro",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o feitiço que faz objetos levitarem?",
    respostas: [
      "A) Lumus",
      "B) Expecto Patronum",
      "C) Wingardium Leviosa",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da escola frequentada por Harry Potter?",
    respostas: [
      "A) Escola de Bruxaria de Hogwarts",
      "B) Escola de Magia de Beauxbatons",
      "C) Escola de Magia e Feitiçaria de Durmstrang",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o animal de estimação de Hermione Granger?",
    respostas: [
      "A) Gato",
      "B) Coruja",
      "C) Sapo",
    ],
    correta: 0
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