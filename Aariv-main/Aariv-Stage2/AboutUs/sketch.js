var h1
function setup(){
  createCanvas(windowWidth , windowHeight)
  title=createElement("h1","CURRENT STATS");
}
function draw (){
  background("white")
  title.position(width -50 , 200)
}