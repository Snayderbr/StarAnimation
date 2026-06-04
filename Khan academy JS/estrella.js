var xPos = 89;
var yPos = 360;
var xStar1= 74;
var yStar1=389;
var xStar2=95;
var yStar2 =389;

function setup() {
    createCanvas(400,400);
    angleMode(DEGREES); 
}

function draw() {
    noStroke();
    background(82, 101, 222); // fondo azul espacial

    // ── Capa 1: polvo estelar (puntos de 1px, azul tenue) ──
    fill(180, 190, 255, 160);
    noStroke();
    // fila superior
    ellipse(15,  10, 1, 1);  ellipse(42,  22, 1, 1);  ellipse(78,   8, 1, 1);
    ellipse(110, 18, 1, 1);  ellipse(145,  5, 1, 1);  ellipse(172, 28, 1, 1);
    ellipse(205, 12, 1, 1);  ellipse(238,  3, 1, 1);  ellipse(265, 20, 1, 1);
    ellipse(295,  9, 1, 1);  ellipse(322, 25, 1, 1);  ellipse(355,  7, 1, 1);
    ellipse(382, 17, 1, 1);
    // fila media-alta
    ellipse(8,   55, 1, 1);  ellipse(35,  48, 1, 1);  ellipse(62,  65, 1, 1);
    ellipse(95,  42, 1, 1);  ellipse(128, 58, 1, 1);  ellipse(160, 44, 1, 1);
    ellipse(192, 70, 1, 1);  ellipse(218, 52, 1, 1);  ellipse(248, 38, 1, 1);
    ellipse(278, 62, 1, 1);  ellipse(308, 45, 1, 1);  ellipse(338, 68, 1, 1);
    ellipse(368, 50, 1, 1);  ellipse(395, 35, 1, 1);
    // fila media
    ellipse(22,  105, 1, 1); ellipse(58,  92, 1, 1);  ellipse(88, 118, 1, 1);
    ellipse(115, 100, 1, 1); ellipse(148, 85, 1, 1);  ellipse(178, 112, 1, 1);
    ellipse(210, 98, 1, 1);  ellipse(242, 80, 1, 1);  ellipse(272, 108, 1, 1);
    ellipse(305, 95, 1, 1);  ellipse(335, 115, 1, 1); ellipse(365, 88, 1, 1);
    ellipse(390, 102, 1, 1);
    // filas inferiores del cielo
    ellipse(12,  155, 1, 1); ellipse(48,  168, 1, 1); ellipse(82,  145, 1, 1);
    ellipse(118, 162, 1, 1); ellipse(152, 140, 1, 1); ellipse(185, 175, 1, 1);
    ellipse(220, 150, 1, 1); ellipse(255, 165, 1, 1); ellipse(290, 138, 1, 1);
    ellipse(325, 158, 1, 1); ellipse(358, 172, 1, 1); ellipse(390, 148, 1, 1);
 
    ellipse(25,  205, 1, 1); ellipse(60,  218, 1, 1); ellipse(95,  195, 1, 1);
    ellipse(132, 210, 1, 1); ellipse(168, 190, 1, 1); ellipse(202, 222, 1, 1);
    ellipse(238, 200, 1, 1); ellipse(272, 215, 1, 1); ellipse(308, 188, 1, 1);
    ellipse(342, 208, 1, 1); ellipse(375, 195, 1, 1);
 
    ellipse(18,  258, 1, 1); ellipse(52,  242, 1, 1); ellipse(88,  268, 1, 1);
    ellipse(122, 250, 1, 1); ellipse(158, 235, 1, 1); ellipse(194, 262, 1, 1);
    ellipse(230, 245, 1, 1); ellipse(265, 270, 1, 1); ellipse(300, 252, 1, 1);
    ellipse(335, 238, 1, 1); ellipse(370, 258, 1, 1); ellipse(395, 248, 1, 1);
 
    // ── Capa 2: estrellas pequeñas (2px, blanco azulado) ──
    fill(210, 215, 255, 200);
    ellipse(30,  32, 2, 2);  ellipse(72,  15, 2, 2);  ellipse(130, 40, 2, 2);
    ellipse(180, 12, 2, 2);  ellipse(230, 35, 2, 2);  ellipse(285, 20, 2, 2);
    ellipse(340, 38, 2, 2);  ellipse(388,  8, 2, 2);
 
    ellipse(50,  78, 2, 2);  ellipse(105, 60, 2, 2);  ellipse(160, 82, 2, 2);
    ellipse(215, 65, 2, 2);  ellipse(268, 75, 2, 2);  ellipse(318, 55, 2, 2);
    ellipse(375, 80, 2, 2);
 
    ellipse(20,  128, 2, 2); ellipse(75,  115, 2, 2); ellipse(135, 132, 2, 2);
    ellipse(195, 120, 2, 2); ellipse(250, 108, 2, 2); ellipse(305, 125, 2, 2);
    ellipse(362, 118, 2, 2);
 
    ellipse(40,  178, 2, 2); ellipse(98,  165, 2, 2); ellipse(155, 182, 2, 2);
    ellipse(212, 170, 2, 2); ellipse(268, 158, 2, 2); ellipse(325, 175, 2, 2);
    ellipse(380, 162, 2, 2);
 
    ellipse(55,  228, 2, 2); ellipse(112, 215, 2, 2); ellipse(170, 232, 2, 2);
    ellipse(228, 220, 2, 2); ellipse(285, 210, 2, 2); ellipse(342, 225, 2, 2);
 
    ellipse(28,  278, 2, 2); ellipse(85,  262, 2, 2); ellipse(145, 280, 2, 2);
    ellipse(205, 268, 2, 2); ellipse(262, 255, 2, 2); ellipse(320, 272, 2, 2);
    ellipse(378, 260, 2, 2);
 
    // ── Capa 3: estrellas medianas (3px, tono crema cálido) ──
    fill(255, 248, 220);
    ellipse(55,  28, 3, 3);  ellipse(155, 18, 3, 3);  ellipse(260, 32, 3, 3);
    ellipse(360, 22, 3, 3);
 
    ellipse(100, 72, 3, 3);  ellipse(200, 58, 3, 3);  ellipse(310, 68, 3, 3);
 
    ellipse(45,  120, 3, 3); ellipse(148, 110, 3, 3); ellipse(252, 125, 3, 3);
    ellipse(348, 115, 3, 3);
 
    ellipse(88,  170, 3, 3); ellipse(188, 158, 3, 3); ellipse(292, 168, 3, 3);
    ellipse(382, 155, 3, 3);
 
    ellipse(32,  218, 3, 3); ellipse(132, 205, 3, 3); ellipse(235, 215, 3, 3);
    ellipse(335, 200, 3, 3);
 
    ellipse(65,  265, 3, 3); ellipse(170, 255, 3, 3); ellipse(275, 268, 3, 3);
    ellipse(365, 250, 3, 3);
 
    // ── Capa 4: estrellas brillantes (4px, blanco puro) ──
    fill(255);
    ellipse(90,  40, 4, 4);  ellipse(210, 25, 4, 4);  ellipse(330, 45, 4, 4);
    ellipse(25,  90, 4, 4);  ellipse(175, 85, 4, 4);  ellipse(290, 95, 4, 4);
    ellipse(380, 75, 4, 4);
 
    ellipse(60,  145, 4, 4); ellipse(165, 135, 4, 4); ellipse(270, 150, 4, 4);
    ellipse(370, 140, 4, 4);
 
    ellipse(110, 195, 4, 4); ellipse(222, 185, 4, 4); ellipse(318, 192, 4, 4);
 
    ellipse(50,  242, 4, 4); ellipse(155, 232, 4, 4); ellipse(258, 248, 4, 4);
    ellipse(355, 235, 4, 4);
 
    // ── Capa 5: estrellas grandes con halo (2 círculos por estrella) ──
    // halo exterior semitransparente + núcleo brillante encima
    fill(255, 255, 200, 60); // halo amarillo pálido
    ellipse(140, 55, 12, 12);
    ellipse(310, 35, 10, 10);
    ellipse(72,  175, 10, 10);
    ellipse(340, 160, 12, 12);
    ellipse(185, 250, 10, 10);
 
    fill(255, 255, 220); // núcleo blanco cálido
    ellipse(140, 55, 5, 5);
    ellipse(310, 35, 4, 4);
    ellipse(72,  175, 5, 5);
    ellipse(340, 160, 5, 5);
    ellipse(185, 250, 4, 4);
 
    // ── Capa 6: nebulosas (manchas muy transparentes para dar profundidad) ──
    noStroke();
    fill(100, 60, 180, 18);
    ellipse(200, 130, 200, 90); // nebulosa central
    fill(0, 120, 200, 12);
    ellipse(350, 80, 160, 70);  // nebulosa derecha
    fill(80, 0, 160, 15);
    ellipse(60, 200, 140, 60);  // nebulosa izquierda-baja

    // ── Planeta (3 capas para dar volumen) ──
    fill(0, 140, 196);
    ellipse(200,400,600,300);
    fill(213, 70, 252);
    ellipse(200,435,560,300);
    fill(173, 0, 230);
    ellipse(200,435,500,270);

    // Cráteres en la superficie
    fill(110, 1, 106);
    ellipse(150,330,30,10);
    ellipse(200,320,50,20);
    ellipse(100,360,30,10);
    ellipse(300,340,40,15);
    ellipse(340,370,20,10);

    // Sombra debajo del cañón
    fill(0, 0, 0,30);
    ellipse(40,395,160,20);
    
    // ── Mecha del cañón ──
    push();
    stroke(71, 23, 23);
    strokeWeight(5);
    fill(179, 36, 36);
    line(49,389,15,314); // cuerda de la mecha
    pop();
   
    // Humo de la mecha (elipse oscura rotada)
    push();
    stroke(8, 8, 8);
    fill(15, 14, 14);
    translate(-64,15);
    rotate(radians(-1000));
    ellipse(-10, 336,15,18);
    pop();
   
    // Llama en la punta de la mecha
    fill(179, 88, 36); // naranja exterior
    ellipse(15,315,10,10);
    fill(207, 199, 37); // amarillo interior
    ellipse(15,315,5,5);

    // ── Estela del disparo (4 bandas de color detrás de la estrella) ──
    push();
    translate(xPos,yPos);
    rotate(radians(-2345));
    noStroke();
    fill(0, 71, 14); // banda verde
    rect(-91,-15,91, -6);
    pop();
    
    push();
    translate(xPos,yPos);
    rotate(radians(-2345));
    noStroke();
    fill(247, 235, 5); // banda amarilla
    rect(-91,1,91, -7);
    pop();
      
    push();
    translate(xPos,yPos);
    rotate(radians(-2345));
    noStroke();
    fill(248, 122, 255); // banda rosa
    rect(-91,-3,91, -6);
    pop();
    
    push();
    translate(xPos,yPos);
    rotate(radians(-2345));
    noStroke();
    fill(50, 24, 163); // banda azul oscuro
    rect(-91,-9,91, -6);
    pop();

    // ── Cuerpo del cañón ──
    push();
    fill(43, 33, 43);
    stroke(94, 94, 94);
    strokeWeight(1);
    translate(-227,88);
    rotate(radians(-2345));
    rect(0,350,79,26); // tubo principal
    pop();
    
    // Boca del cañón
    push();
    fill(0);
    translate(12,361);
    rotate(radians(-1000));
    ellipse(0,0,19,44);
    pop();
    
    // Refuerzo metálico 1
    push();
    fill(3, 3, 3);
    stroke(94, 94, 94);
    strokeWeight(1);
    translate(-139,490);
    rotate(radians(-7290));
    rect(1,242,25,5);
    pop();
    
    // Refuerzo metálico 2
    push();
    fill(3, 3, 3);
    stroke(94, 94, 94);
    strokeWeight(1);
    translate(-139,490);
    rotate(radians(-7290));
    rect(1,248,25,5);
    pop();
    
    // Refuerzo metálico 3
    push();
    fill(3, 3, 3);
    stroke(94, 94, 94);
    strokeWeight(1);
    translate(-145,512);
    rotate(radians(-7472));
    rect(1,290,24,5);
    pop();

    // ── Rueda del cañón ──
    push(); 
    fill(99, 60, 16);
    stroke(0, 0, 0);
    strokeWeight(1);
    ellipse(40,370,50,50); // aro exterior
    pop();

    fill(120, 62, 12);
    ellipse(40,370,30,30); // aro interior
    fill(0, 0, 0);
    ellipse(40,370,10,10); // centro de la rueda

    // Rayos de la rueda
    fill(69, 0, 0);
    triangle(40,370,55,370,51,359);
    triangle(40,370,40,385,45,385);
    triangle(40,370, 25,370,26,360);
    triangle(40,370,51,360,52,370);
    triangle(40,370,50,380,55,375);
    triangle(40,370,30,380,25,375);
    triangle(34,355,46,355,40,370);
    triangle(34,385,46,385,40,370);
    
    // ── Estrella principal (animada, sale disparada del cañón) ──
    push();
    stroke(255);
    fill(248, 255, 38);
    triangle(xPos, yPos-15,xPos+10, yPos+5,xPos-10,yPos+5);
    triangle(xPos, yPos+10,xPos+10, yPos-10,xPos-10,yPos-10);
    pop();

    // ── Estrellas decorativas fijas cerca del cañón ──
    fill(248,255,38);
    stroke(255);
    triangle(xStar1, yStar1-15,xStar1+10, yStar1+5,xStar1-10,yStar1+5);
    triangle(xStar1, yStar1+10,xStar1+10, yStar1-10,xStar1-10,yStar1-10);
    
    push();
    triangle(xStar2, yStar2-15,xStar2+10, yStar2+5,xStar2-10,yStar2+5);
    triangle(xStar2, yStar2+10,xStar2+10, yStar2-10,xStar2-10,yStar2-10);
    pop();
  
    // ── Animación ──
    xPos++;           // la estrella avanza hacia la derecha
    yPos *= 99/100;   // y sube un 1% cada frame
}