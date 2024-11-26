# Projeto: Gerador de Cores Aleatórias
Descrição
Este projeto foi desenvolvido como parte da prova do Professor Otávio. O objetivo é criar um script em JavaScript que leia todas as cores da página W3Schools Color Names, insira essas cores em um vetor, escolha 10 cores aleatórias e, por fim, selecione uma cor aleatória dentre essas 10 para imprimir no console do navegador.

Autor
Rafael Machado

Estrutura do Código
Passo 1: Ler todas as cores da página
O primeiro passo é capturar todas as cores da página e armazená-las em um vetor. Utilizamos o seletor de classe CSS .w3-col.l4.m6.w3-center.colorbox para encontrar os elementos que contêm os nomes das cores. Extraímos o texto desses elementos, convertemos para letras minúsculas e armazenamos no vetor.

javascript
Copiar

const cores = Array.from(document.querySelectorAll('.w3-col.l4.m6.w3-center.colorbox'))
                   .map(element => element.querySelector('span a').textContent.trim().toLowerCase());

console.log(cores);
Passo 2: Escolher 10 cores aleatórias
Criamos uma função que escolhe 10 cores aleatórias do vetor cores. Para isso, utilizamos uma cópia do vetor original e removemos as cores já escolhidas para evitar duplicatas.

javascript
Copiar

function escolherCoresAleatorias(cores, quantidade) {
    const coresAleatorias = [];
    const copiaCores = [...cores];
    
    for (let i = 0; i < quantidade; i++) {
        const indiceAleatorio = Math.floor(Math.random() * copiaCores.length);
        coresAleatorias.push(copiaCores.splice(indiceAleatorio, 1)[0]);
    }
    
    sorteio.push(cores.splice(indiceAleatorio, 1)[0]);
  }
  
  return sorteio;
}

const coresAleatorias = escolherCoresAleatorias(cores, 10);
console.log(coresAleatorias);
Passo 3: Escolher uma cor aleatória dentre as 10 cores escolhidas
Por fim, criamos uma função para escolher uma cor aleatória dentre as 10 cores selecionadas no passo anterior e a imprimir no console.

javascript
Copiar

function escolherUmaCorAleatoria(coresAleatorias) {
  const indiceAleatorio = Math.floor(Math.random() * coresAleatorias.length);
  return coresAleatorias[indiceAleatorio];
}

const corAleatoria = escolherUmaCorAleatoria(coresAleatorias);
console.log(corAleatoria);
Código Completo
Aqui está o código completo que deve ser executado no console do navegador na página especificada:

javascript
Copiar

// Passo 1: Ler todas as cores da página
const cores = Array.from(document.querySelectorAll('.w3-col.l4.m6.w3-center.colorbox'))
                   .map(element => element.querySelector('span a').textContent.trim().toLowerCase());

console.log(cores);

// Passo 2: Escolher 10 cores aleatórias
function escolherCoresAleatorias(cores, quantidade) {
  const sorteio = [];
  const copiaCores = [...cores];
  
  for (let i = 0; i < quantidade; i++) {
    const indiceAleatorio = Math.floor(Math.random() * copiaCores.length);
    sorteio.push(copiaCores.splice(indiceAleatorio, 1)[0]);
  }
  
  return sorteio;
}

const coresAleatorias = escolherCoresAleatorias(cores, 10);
console.log(coresAleatorias);

// Passo 3: Escolher uma cor aleatória dentre as 10 cores escolhidas
function escolherUmaCorAleatoria(coresAleatorias) {
  const indiceAleatorio = Math.floor(Math.random() * coresAleatorias.length);
  return coresAleatorias[indiceAleatorio];
}

const corAleatoria = escolherUmaCorAleatoria(coresAleatorias);
console.log(corAleatoria);
Como Executar o Código
Abra a página W3Schools Color Names.
Abra o console do navegador (F12 ou Ctrl+Shift+I e vá para a aba "Console").
Copie e cole o código completo no console e pressione Enter.
O console exibirá todas as cores lidas da página, 10 cores aleatórias e uma cor aleatória dentre as 10 selecionadas.
Conclusão
Este projeto demonstra como manipular o DOM de uma página web para extrair informações específicas, realizar operações de seleção aleatória e exibir resultados no console do navegador. O código é um exemplo prático de como usar JavaScript para interagir com elementos HTML e processar informações de forma eficiente.
