
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //canvas api 

canvas.width = window.innerWidth
canvas.height = window.innerHeight //resize window
ctx. globalCompositeOperation = 'destination-over'
hue = Math.random() * 360 //create rainbow 

let number = 0
let scale = 10

function drawFlower(){

    let angle = number * 3.8  // equal to let number 
    let radius = scale * Math.sqrt(number) //square route 
    let positionX = radius * Math.sin(angle) + canvas.width/2
    let positionY = radius * Math.cos(angle) + canvas.height/2

ctx.fillStyle ='hsl('+ hue + ', 100%, 50%)' //hue saturation light , fill in circle 
ctx.strokeStyle=  'black' //outline 
ctx.lineWidth = 4
ctx.beginPath()
ctx.arc(positionX, positionY, 8, 0, Math.PI * 2) //full circle
ctx.closePath()
ctx.fill()
ctx.stroke()

number++
hue +=0.5
}

function animate(){
    //draw frame
   
//ctx.clearRect(0,0, canvas.width, canvas.height)
drawFlower()
if(number > 950)return //size of frame 
requestAnimationFrame(animate)
}

animate()
