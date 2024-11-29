let frase;

function setup() {
  createCanvas(600, 400);
  
  frase = fraseAleatoria();
}

function fraseAleatoria() {
  let frases = ["Esforça-te, e tem bom ânimo.", "Tenha bom ânimo!", "Não desista dos seus sonhos!", "Você é mais forte do que pensa!"];
  return random(frases);
}

function inicializaCores() {
  background("#FAF0FC");
  fill("black");
  textFont("Comic Sans MS");
  textSize(35);
  textAlign(CENTER, CENTER);
  }

function fraseParcial(minimo, maximo) {
  let quantidade = map(mouseX , minimo, maximo, 1, frase.length);
  let parcial = frase.substring(0, quantidade);
  return parcial;
}

function draw() {  // função draw sempre fica repetindo sem parar
  inicializaCores();
  
  let texto = fraseParcial(0, width);
  text(texto, 300, 200);
}