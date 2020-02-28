namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function build_level () {
    if (Next_level == list.length) {
        game.over(true)
    }
    for (let value of list) {
        scene.place(value, player1)
    }
    value += 1
}
scene.onHitWall(SpriteKind.Player, function (sprite) {
    build_level()
})
let value = 0
let player1: Sprite = null
let Next_level = 0
let list: Image[] = []
list = [img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
e f f f f f f f f f f f f f f e 
e f f f f f f f f f f f f f f e 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`]
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 f 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 7 f 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 f 7 7 7 7 7 7 7 7 f 7 7 7 
7 7 7 f f 7 7 7 7 7 7 f f 7 7 7 
7 7 7 7 f f 7 7 7 7 f f 7 7 7 7 
7 7 7 7 7 f f f f f f 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
Next_level = 0
player1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 . . . . . . 
3 3 3 3 3 3 3 3 3 3 . . . . . . 
3 1 1 1 3 3 1 1 1 3 . . . . . . 
3 1 1 1 3 3 1 1 1 3 . . . . . . 
3 1 1 f 3 3 f 1 1 3 . . . . . . 
3 3 3 3 3 3 3 3 3 3 . . . . . . 
3 3 3 3 3 3 3 3 3 3 . . . . . . 
3 3 3 3 3 3 3 3 3 3 . . . . . . 
3 3 3 3 3 3 3 3 3 3 . . . . . . 
3 3 3 3 3 3 3 3 3 3 . . . . . . 
3 3 3 3 3 3 3 3 3 3 . . . . . . 
3 3 3 3 3 3 3 3 3 3 . . . . . . 
. . . 3 . . 3 . . . . . . . . . 
. . . 3 . . 3 . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(player1)
