function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("white"); 
  fill("blue")
  textSize(54)
  textAlign(CENTER,CENTER);
  textFont("verdana")
   
  let maximo=width;
  let minimo=0;
  
  console.log("Cachorro".lenght);
 let palavra="Cachorro";
  
  let quantidade=map(mouseX,0,width,1,palavra.length);
  let parcial=palavra.substring(0,quantidade);
  text(parcial,200,200)
  
}