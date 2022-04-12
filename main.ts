input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            sprite.move(-1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            sprite.move(1)
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            sprite.move(-1)
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
        }
        sprite.change(LedSpriteProperty.X, 4)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(4, 0)
basic.forever(function () {
	
})
