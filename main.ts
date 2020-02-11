enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = -50
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 4 4 . . . . . 
. . . . . . . 4 f f 4 . . . . . 
. . . . . . . 4 4 4 4 . . . . . 
. . . . . . . 4 4 4 4 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
let anim = animation.createAnimation(ActionKind.Jumping, 1000)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 4 4 . . . . . 
. . . . . . . 4 f f 4 . . . . . 
. . . . . . . 4 4 4 4 . . . . . 
. . . . . . . 4 4 4 4 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
