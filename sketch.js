
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	fill(0)
	rect(0,0,width,height)
	push()
	translate(width/2,height/2)
	let spin = map(mouseX,0,width,1,10,true)
	for(let x=0;x<width*3;x+=spin){
		push()
		noStroke()
		fill(255)
		rotate(noise(x/100,frameCount/2000,mouseX/100+frameCount/200)+sin(100)+x/30)
		scale(noise(x/100,frameCount/2000,mouseX/100+frameCount/300)/2+2)
		let y =height/5*noise(x/100,frameCount/2000,mouseX/500)
    fill(255,100)
    circle((x/10),150,noise(x))
    fill(255,150)
    circle((x/10),200,noise(x)+0.2)
    fill(255,250)
    circle((x/10),250,noise(x/500)+0.8)
    rect(0,0,0.05,y)
	
		pop()
	}
	
}