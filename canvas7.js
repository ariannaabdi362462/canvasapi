const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //canvas api 

canvas.width = window.innerWidth
canvas.height = window.innerHeight   //resize window
ctx. globalCompositeOperation = 'destination-over'
hue = 0

let number = 0
let scale = 10

function drawFlower(){

    let angle = number * 56
    let radius = scale * Math.sqrt(number)
    let positionX = radius * Math.sin(angle) + canvas.width/2
    let positionY = radius * Math.cos(angle) + canvas.height/2

ctx.fillStyle ='#6133FF'
ctx.strokeStyle=  '#33FFEC'
ctx.lineWidth = 8
ctx.beginPath()
ctx.arc(positionX, positionY, 9, 0, Math.PI * 2) //full circle
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
if(number > 500)return
requestAnimationFrame(animate)
}

animate()