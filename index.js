const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes é um operador de comparação em JavaScript?",
      respostas: [
        "===", 
        "&&", 
        "%%"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'getElementById' faz em JavaScript?",
      respostas: [
        "Retorna um array com todos os elementos da página", 
        "Retorna o primeiro elemento encontrado na página com o ID especificado", 
        "Retorna o último elemento encontrado na página com o ID especificado"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof [1, 2, 3])?",
      respostas: [
        "number", 
        "object", 
        "array"
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' verifica em JavaScript?",
      respostas: [
        "Comparação de valores e tipos", 
        "Comparação de valores apenas", 
        "Comparação de tipos apenas"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Verifica se uma variável é definida", 
        "Verifica se uma variável é indefinida", 
        "Retorna o tipo de uma variável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()", 
        "push()", 
        "addToEnd()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes é um método de loop em JavaScript?",
      respostas: [
        "for()", 
        "next()", 
        "if()"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelectorAll' faz em JavaScript?",
      respostas: [
        "Retorna o primeiro elemento encontrado na página com o seletor especificado", 
        "Retorna todos os elementos encontrados na página com o seletor especificado", 
        "Retorna o último elemento encontrado na página com o seletor especificado"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'toFixed' faz em JavaScript?",
      respostas: [
        "Arredonda um número para o inteiro mais próximo", 
        "Formata um número com um número especificado de casas decimais", 
        "Retorna o número de casas decimais em um número"
      ],
      correta: 1
    }
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