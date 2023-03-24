// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = parseFloat(prompt("Digite a altura:"));
  let largura = parseFloat(prompt("Digite a largura:"));
  let area = altura * largura;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("Digite o ano atual:");
  let anoNasc = prompt("Digite o ano em que você nasceu:");
  let idade = anoAtual - anoNasc;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Digite seu nome:");
  let idade = prompt("Digite sua idade:");
  let email = prompt("Digite seu email:");

  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Digite sua primeira cor favorita:");
  let cor2 = prompt("Digite sua segunda cor favorita:");
  let cor3 = prompt("Digite sua terceira cor favorita:");
  console.log([cor1, cor2, cor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase();
  return stringMaiuscula;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const semPreju = custo / valorIngresso;
  return semPreju;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const removerPrimeiro = array.shift();
  const removerUltimo = array.pop();

  array.unshift(removerUltimo);
  array.push(removerPrimeiro);
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Qual o ano atual?:"));
  const anoNasc = Number(prompt("Qual o ano que você nasceu?:"));
  const emissao = Number(
    prompt("Qual o ano que você emitiu sua carteira de identidade?:")
  );

  const idade = anoAtual - anoNasc;

  const rg1 = idade <= 20 && anoAtual - emissao >= 5;
  const rg2 = idade >= 20 && idade <= 50 && anoAtual - emissao >= 10;
  const rg3 = idade > 50 && anoAtual - emissao >= 15;

  const comparar = rg1 || rg2 || rg3;
  console.log(comparar);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?");
  const escolaridade = prompt("Você possui ensino médio completo?");
  const disponibilidade = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso?"
  );

  const validacao =
    idade === "sim" && escolaridade === "sim" && disponibilidade === "sim";
  console.log(validacao);
}
