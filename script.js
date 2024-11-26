// Função que lê todas as cores do W3
const cores = Array.from(document.querySelectorAll('.w3-col.l4.m6.w3-center.colorbox'))
                   .map(element => element.querySelector('span a').textContent.trim().toLowerCase());

console.log("Todas as cores do site:")
console.log(cores);

// Função que escolhe 10 cores aletórias
function escolheCorAleatoria(cores, quantidade) {
    const coresAleatorias = [];
    const copiaCores = [...cores];
    
    for (let i = 0; i < quantidade; i++) {
        const indiceAleatorio = Math.floor(Math.random() * copiaCores.length);
        coresAleatorias.push(copiaCores.splice(indiceAleatorio, 1)[0]);
    }
    
    return coresAleatorias;
}

const coresAleatorias = escolheCorAleatoria(cores, 10);
console.log("10 cores aleatórias escolhidas:")
console.log(coresAleatorias);

// Função que escolhe uma cor dentre as 10 cores escolhidas antes
function EscolheUmaCor(coresAleatorias) {
    const indiceAleatorio = Math.floor(Math.random() * coresAleatorias.length);
    return coresAleatorias[indiceAleatorio];
}

const corAleatoria = EscolheUmaCor(coresAleatorias);
console.log("A cor aleatória final escolhida é: ", corAleatoria);
