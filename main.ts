let mySprite: Sprite = null
function doSomething (mySprite: Sprite) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f 7 7 7 7 f 7 f . . . . 
        . . f f 7 7 7 7 f 7 7 7 f . . . 
        . . f 7 7 7 f f 7 7 7 7 f . . . 
        . . f f f f 7 7 7 7 7 7 7 f . . 
        . . f 7 7 7 7 f f f f 7 7 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.Player)
}
