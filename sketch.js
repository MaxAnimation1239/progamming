function setup() {
  // put setup code here
   var width = 700;
   var height = 750;
     createCanvas (width, height);
     background('#E61C13');
}

function draw() {
  // put drawing code here
  if(mouseIsPressed === true){
  fill('#F207CA');
  stroke('#055299');
  ellipse (mouseX, mouseY, 40);
  }
  else{
    fill('#D8E629');
    stroke('#298CE6');
    square(mouseX,mouseY);
  }
}
