class Paddle {
  constructor (gameHeight, gameWidth) {
    this.height = 30
    this.width = 150

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    }

  }

  draw(context) {
    context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

}
