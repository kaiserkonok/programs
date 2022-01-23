let canvas = document.getElementById("canvas")
const HEIGHT = 600
const WIDTH = 800

let context = canvas.getContext("2d")
context.fillStyle = "green"
context.clearRect(0, 0, 800, 600)

let paddle = new Paddle(HEIGHT, WIDTH)
paddle.draw(context)
