function mysprite (mySprite: Sprite) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f 7 7 7 7 f 7 f . . . . 
        . . f f 7 7 7 7 f 7 7 7 f . . . 
        . . f 7 7 7 f f 7 7 7 7 f . . . 
        . . f f f f 7 7 7 7 7 7 7 f . . 
        . . f 7 7 7 7 f f f f 7 7 f . . 
        . f f f f f f f 6 6 6 f f f . . 
        . f f 6 4 4 6 7 f 4 4 6 6 f . . 
        . f 6 6 4 d 4 1 f 7 7 6 f . . . 
        . . f 6 6 6 6 6 7 7 b b b b b b 
        . . . . f 4 7 7 6 b b f . . . . 
        . . . . f 6 7 7 6 c c f . . . . 
        . . . f f f 6 6 f 8 8 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(4, 75)
    controller.moveSprite(mySprite)
    mySprite.setStayInScreen(true)
}
let tank: Sprite = null
let mySprite: Sprite = null
mysprite(mySprite)
game.onUpdateInterval(500, function () {
    tank = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 7 7 7 7 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tank.setVelocity(randint(0, 70), randint(0, 70))
})
