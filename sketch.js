//variaveis da bolinha
let yb = 200;
let xb= 300;
let diam = 19;
let raio = diam/2;
//velocidade da bolinha
let velocidadexb = 5;
let velocidadeyb = 5;

//variaveis minha raquete
let xRaquete = 3;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 70;
let colidiu = false;

//variaveis raquete do oponente
let xOponente= 586;
let yOponente= 150;
let velocidadeYoponente;

//placar do jogo
let meusPontos= 0;
let pontosOponente= 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}


function draw() {
  background(1, 70, 200);
  mostrabolinha();
  movimentabolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaobiblioteca(xRaquete, yRaquete);
  mostraRaquete(xOponente, yOponente);
  movimentaOponente();
  colisaobiblioteca(xOponente, yOponente);
  incluirPlacar();
  marcaPonto();
  limiteRaquete();
  ultrapassaRaquete();
}

  function mostrabolinha(){
    color(250, 50, 65)
    circle(xb, yb, diam);
  }
  function movimentabolinha(){
    xb+= velocidadexb;
    yb += velocidadeyb;
  }
  function verificaColisaoBorda(){
    if(xb+raio > width || xb-raio < 0){
      velocidadexb *= -1;
    }
    if(yb+raio > height || yb-raio < 0){
      velocidadeyb *= -1;
    }
}
function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete) 
}


function movimentaMinhaRaquete (){
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xb - raio < xRaquete + comprimentoRaquete && yb - raio < yRaquete + alturaRaquete && yb + raio > yRaquete){
    velocidadexb *= -1;
    raquetada.play();
  }
}

function colisaobiblioteca(x, y){
  colidiu =
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xb, yb, raio);
  if(colidiu){
    velocidadexb *= -1;
    raquetada.play();
  }
}

function movimentaOponente(){
  if (keyIsDown(UP_ARROW)){
    yOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yOponente += 10;
  }
}

function incluirPlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize(18)
  fill(50)
  rect(130, 10, 40, 20);
  fill(255);
  text(meusPontos, 150, 26);
  fill(50)
  rect(430, 10, 40, 20)
  fill(255);
  text(pontosOponente, 450, 26);
}

function marcaPonto(){
  if(xb > 590){
    meusPontos += 1;
    ponto.play();
  }
  if(xb < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

function limiteRaquete(){
  if(yRaquete > 360){
    yRaquete = 308
  }
  if(yOponente > 360){
    yOponente = 308
  }
  if(yRaquete < 0){
    yRaquete = 10
  }
  if(yOponente < 0){
    yOponente = 10
  }
}

function ultrapassaRaquete(){
  if(xb-raio > 600){
    xb = 580 
}
  if (xb - raio < 0){
    xb = 23
    }
}