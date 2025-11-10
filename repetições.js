function nomes(nome) {
    let nomes = ["Guilherme", "Vinicius", "Felipe", "Gustavo", "Caique"]
    for (nome of nomes) {
        console.log(nome);
    }
}
nomes()

function so() {
const numeros = [10, 20, 30, 40, 50];
let so = 0;
for (let numero of numeros) {
  so += numero;
}
console.log(so);
}
so();


function obj() {
let pessoa = {
  nome: "Felipe",
  idade: 18,
  cidade: "Osasco"
};
for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}
}
obj()


function contador() {
    let contador = 0;
    let pessoa = {
        nome: "Felipe",
        idade: 18,
        cidade: "Osasco",
        profissao: "Pedreiro"
    };
    for (let prop in pessoa) {
        contador++;
    }
    console.log(contador);
}
contador()



function nome() {
    let nome = ["Guilherme", "Vinicius", "Felipe", "Gustavo", "Caique"]
    let nomesjuntos = nome.join(", ") 
        console.log(nomesjuntos);  
}
nome()

function misto(){
    let misto = ["texto", 42, true, {nome: "Zzz"},[1,2,3]]
    for(let valor of misto){
        console.log(valor, "→", typeof valor);
    }
}
misto()

function transformar() {
    let pessoas = {
        Ana: 25,
        Bruno: 30,
        Carla: 22,
        Diego: 28
    }
    for (let nome in pessoas) {
        pessoas[nome] += 1;
    }
    console.log(pessoas);
}
transformar()

function converter() {
let pessoa = {
  nome: "Lucas",
  idade: 27,
  cidade: "Sorocaba"
};
let resultado = [];
for (let chave in pessoa) {
  resultado.push(`${chave}: ${pessoa[chave]}`);
}
console.log(resultado);
}
converter()



function converter() {
    const numeros = [1, 2, 3, 2, 4, 1, 5, 3, 6];
    const unicos = new Set();
    for (let numero of numeros) {
        unicos.add(numero);
    }
    console.log("Quantidade de valores únicos:", unicos.size);
}
converter()

function contagem() {
let frase = ("isso te enche de determinação");
let contagem = {};
for (let char of frase) {
  if (char === " ") continue;
  char = char.toLowerCase();
  if (contagem[char]) {
    contagem[char]++;
  } else {
    contagem[char] = 1;
  }
}
console.log(contagem);

}
contagem()