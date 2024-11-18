namespace SpriteKind {
    export const bullet = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . . . f f f f . . . 
        . . . f f f f f f f 6 f f f . . 
        . . . f 7 7 7 7 7 f 6 6 6 f . . 
        . . . f f f f f f f 6 f f f . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 75, 0)
})
sprites.onOverlap(SpriteKind.bullet, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
info.onScore(0, function () {
    game.gameOver(true)
})
function askAQuestion () {
    game2 = game.ask("Do you want to fight?", "Press A for hard version")
    return game2
}
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bullet, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 500)
})
function mysprite (mySprite: Sprite) {
    mySprite.setPosition(4, 75)
    controller.moveSprite(mySprite)
    mySprite.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    info.changeScoreBy(-1)
})
let game2 = false
let projectile: Sprite = null
let projectile2: Sprite = null
let tank: Sprite = null
let mySprite: Sprite = null
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
mysprite(mySprite)
askAQuestion()
info.setScore(50)
if (controller.A.isPressed()) {
    info.setLife(1)
} else {
    info.setLife(5)
}
while (info.score() > 0) {
    pause(500)
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
    tank.setVelocity(10, randint(0, 100))
    tank.setPosition(randint(46, 142), randint(10, 100))
    tank.setBounceOnWall(true)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, tank, -60, 0)
    projectile2.setKind(SpriteKind.bullet)
}
