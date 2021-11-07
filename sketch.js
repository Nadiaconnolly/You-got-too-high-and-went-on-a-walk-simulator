const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

const sunColor = [255, 204, 0]
const sunRingColor = [120, 120, 20]
const sunSize = 100

const groundColor = [84, 209, 148]

let markLength = 20
let scrollVal = -canvasHeight * 4

let angle = 0
let angle2 = 0

function setup(){
  createCanvas(canvasWidth, canvasHeight, WEBGL)
}

function draw(){
  background(33, 77, 181)

  angleMode(DEGREES)

  //rotateY(angle2)

  drawSun(0, -canvasHeight/1.5, -500)
  drawGround()

  angle++
  angle2+= 0.001
  scrollVal++

  // orbitControl()
  // background(50)
  // strokeWeight(4)
  // stroke(255)
  // point(-25, 30)
  // point(25, 30)
  // point(25, -30)
  // point(-25, -30)
}

function drawSun(x, y, z){
  push()
    translate(x, y, z)
    rotateY(angle)
    fill(sunColor)
    stroke(sunRingColor)
    strokeWeight(20)
    ellipse(0, 0, sunSize)
  pop()

  push()
    rotateY(angle)
    fill(33, 77, 181)
    ellipsoid(30, 40, 40)
    fill(237, 237, 2281)
    ellipsoid(20, 40, 60)
    fill(5, 8, 46)
    ellipsoid(40, 30, 30)
  pop()
}

function drawGround(){
  push()
    translate(0, canvasHeight/4, 0)
    rotateX(100)
    fill(groundColor)
    box(canvasWidth * 6, canvasHeight * 10, 10)
    drawRoad()
    drawBuilding(100, -100, 20)
  pop()
}

function drawRoad(){
  fill(5, 41, 19)
  box(100, canvasHeight * 10, 11)
  drawLines()
}

function drawLines(){
  fill(237, 237, 2281)
  for(let i = 0; i < canvasHeight; i ++){
      push()
          translate(0, i * (markLength * 2) + scrollVal, 12)
          box(10, markLength, 1)
      pop()
  }
}

function drawBuilding(x, y, z){
  const height = z * 1.8
  push()
    //to move buildings = translate(x, y + (scrollVal + canvasHeight * 3), z)
    translate(x, y, z)
    fill(115, 209, 206)
    box(height/2, height * 10, height * 10)
  pop()
  push()
    translate(x - 5, y, z)
    fill(24, 99, 98)
    box(height/2, height * 2, height * 2)
  pop()

  push()
    translate(x - 300, y + 300, z)
    fill(63, 131, 166)
    box(height/2, height * 10, height * 10)
  pop()
  push()
    translate(x - 295, y + 300, z)
    fill(34, 91, 120)
    box(height/2, height * 2, height * 2)
  pop()
  push()
    translate(x - 295, y + 200, z)
    fill(255, 204, 0)
    box(height/2, height * 2, height * 2)
  pop()

  push()
    translate(x - 400, y + 300, z)
    fill(43, 148, 145)
    box(height/2, height * 10, height * 10)
  pop()
  push()
    translate(x + 400, y - 300, z)
    fill(84, 209, 205)
    box(height, height * 15, height * 20)
  pop()
  push()
    translate(x + 200, y - 500, z)
    rotateX(90)
    fill(118, 176, 149)
    cone(height, height * 15)
  pop()
  push()
    translate(x + 100, y + 500, z)
    rotateX(90)
    fill(52, 110, 75)
    cone(height, height * 15)
  pop()
}








    //for 'biblical angel'

// const canvasWidth = window.innerWidth
// const canvasHeight = window.innerHeight

// const sunColor = [255, 204, 0]
// const sunRingColor = [120, 120, 20]
// const sunSize = 100

// const groundColor = [84, 209, 148]

// let angle = 0

// function setup(){
//   createCanvas(canvasWidth, canvasHeight, WEBGL)
// }

// function draw(){
//   background(33, 77, 181)
//   drawSun(0, -canvasHeight/3, -500)
//   drawGround()

//   angle++
// }

// function drawSun(x, y, z){
//   push
//     translate(x, y, z)
//     rotateY(angle)
//     fill(sunColor)
//     stroke(sunRingColor)
//     strokeWeight(20)
//     ellipse(0, 0, sunSize)
//   pop
// }

// function drawGround(){
//   fill(groundColor)
//   box(canvasWidth, canvasHeight, 1)
// }


  //for solar system
// let angle = 0

// let planets = [
//   {
//     distance: 250,
//     col: [0, 94, 255],
//     size: 10,
//   },
//   {
//     distance: 325,
//     col: [29, 191, 99],
//     size: 30,
//   },
//   {
//     distance: 450,
//     col: [235, 150, 94],
//     size: 50,
//   },
//   {
//     distance: 650,
//     col: [59, 16, 115],
//     size: 40,
//   },
// ]

// function setup(){
//   createCanvas(canvasWidth, canvasHeight, WEBGL)
// }

// function draw(){
//   background(30)

//   fill(255, 204, 0)
//   sphere(200)
//   planets.forEach(planet => {
//      drawPlanet(planet)
//   })
//   angle+= 0.01
// }

// function drawPlanet({distance, col, size}){
//   const x = distance * sin(angle)
//   const y = distance * cos(angle)
//   push()
//     translate(x, 0, y)
//     rotateY(angle * size)
//     rotateZ(0.2)
//     fill(col)
//     sphere(size)
//   pop()
// }