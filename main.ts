controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ready) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, randint(-50, 50), randint(-50, 50))
        if (projectile.vx < 0) {
            projectile.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . b 5 5 b . . . . . . . . . 
                . . . . b b b b b b . . . . . . 
                . . . b 5 5 5 5 5 b b . . . . . 
                . . b 5 5 5 5 5 5 5 b b b b b . 
                . . b 5 5 5 5 5 5 5 5 b 5 d b . 
                . . f 4 d 5 f 1 d 5 b 5 5 b . . 
                . . c 4 4 5 f f 1 b 5 5 d b . . 
                . b 4 4 4 4 b f d 5 5 5 b d b b 
                b 4 4 4 4 4 4 5 b 5 5 d c d d b 
                . b 5 5 5 5 5 5 5 b c c d d d c 
                . b 5 5 5 5 5 5 5 d d d d d b c 
                . b d 5 5 5 5 5 d d d d d d c . 
                . . b b 5 5 5 d d d d d b c . . 
                . . . b b c c c c c c c c . . . 
                `)
        }
    }
})
let projectile: Sprite = null
let Ready = false
Ready = false
game.showLongText("Make a One Button Game", DialogLayout.Full)
game.showLongText("You are only allowed the A Button", DialogLayout.Full)
game.showLongText("Make it fun, make it creative!", DialogLayout.Full)
Ready = true
