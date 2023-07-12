namespace SpriteKind {
    export const Dot = SpriteKind.create()
    export const spuerdot = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PAC_Man,
    [img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . 5 5 . . . . . 5 5 . . . 
        . . 5 5 5 . . . . . 5 5 5 . . 
        . . 5 5 5 5 . . . 5 5 5 5 . . 
        . 5 5 5 5 5 . . . 5 5 5 5 5 . 
        . 5 5 5 5 5 . . . 5 5 5 5 5 . 
        . 5 5 5 5 5 5 . 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 . 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 . 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . 5 5 . . . . . . . . . 5 5 . 
        . 5 5 5 . . . . . . . 5 5 5 . 
        . 5 5 5 5 . . . . . 5 5 5 5 . 
        . 5 5 5 5 5 . . . 5 5 5 5 5 . 
        . 5 5 5 5 5 5 . 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    info.changeScoreBy(10)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PAC_Man,
    [img`
        . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . . . 5 5 5 5 5 5 5 5 5 5 
        . . . . . . . . 5 5 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 
        . . . . . . . . 5 5 5 5 5 5 5 
        . . . . . 5 5 5 5 5 5 5 5 5 5 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . 5 5 5 5 5 5 5 . . 
        . . . . . . . 5 5 5 5 5 5 5 . 
        . . . . . . . . 5 5 5 5 5 5 . 
        . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . 5 5 5 5 5 5 . 
        . . . . . . . 5 5 5 5 5 5 5 . 
        . . . . . . 5 5 5 5 5 5 5 . . 
        . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    tiles.placeOnTile(PAC_Man, tiles.getTileLocation(29, 15))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PAC_Man,
    [img`
        . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 5 5 . . . . . . . . 
        5 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . 
        . . 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 5 5 5 . . . . . . . 
        . 5 5 5 5 5 5 . . . . . . . . 
        5 5 5 5 5 5 . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . 
        5 5 5 5 5 5 . . . . . . . . . 
        . 5 5 5 5 5 5 . . . . . . . . 
        . 5 5 5 5 5 5 5 . . . . . . . 
        . . 5 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    info.changeScoreBy(10)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spuerdot, function (sprite, otherSprite) {
    Scared()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PAC_Man,
    [img`
        . . . . . 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 . 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 . 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 . 5 5 5 5 5 5 . 
        . 5 5 5 5 5 . . . 5 5 5 5 5 . 
        . 5 5 5 5 5 . . . 5 5 5 5 5 . 
        . . 5 5 5 5 . . . 5 5 5 5 . . 
        . . 5 5 5 . . . . . 5 5 5 . . 
        . . . 5 5 . . . . . 5 5 . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 . 5 5 5 5 5 5 . 
        . 5 5 5 5 5 . . . 5 5 5 5 5 . 
        . 5 5 5 5 . . . . . 5 5 5 5 . 
        . 5 5 5 . . . . . . . 5 5 5 . 
        . 5 5 . . . . . . . . . 5 5 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
function Scared () {
    animation.runImageAnimation(
    Red_Ghost,
    [img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 1 1 1 8 8 1 1 1 8 8 8 8 
        . 8 8 8 1 1 1 8 8 1 1 1 8 8 8 8 
        8 8 8 8 1 1 1 8 8 1 1 1 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 1 1 8 8 8 1 1 8 8 8 1 1 8 8 
        8 1 8 8 1 1 1 8 8 1 1 1 8 8 1 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 . 8 8 8 8 . . 8 8 8 8 . 8 8 
        8 . . . 8 8 8 . . 8 8 8 . . . 8 
        `],
    500,
    false
    )
}
info.onScore(3170, function () {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    tiles.placeOnTile(PAC_Man, tiles.getTileLocation(1, 15))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let Red_Ghost: Sprite = null
let PAC_Man: Sprite = null
PAC_Man = sprites.create(img`
    . . . 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . 5 5 5 5 5 5 5 
    . . . . . . . . 5 5 5 5 
    . . . . . 5 5 5 5 5 5 5 
    . . 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 . . . . 
    `, SpriteKind.Player)
Red_Ghost = sprites.create(img`
    . . . . . 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 1 1 2 2 2 2 1 1 2 2 2 . 
    . 1 1 1 1 2 2 1 1 1 1 2 2 . 
    . 8 8 1 1 2 2 8 8 1 1 2 2 . 
    . 8 8 1 1 2 2 8 8 1 1 2 2 2 
    2 2 1 1 2 2 2 2 1 1 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 . 2 2 2 2 . 2 2 2 2 
    . 2 2 . . . 2 2 . . . 2 2 . 
    `, SpriteKind.Enemy)
let Orange_ghost = sprites.create(img`
    . . . . . 4 4 4 4 . . . . . 
    . . . 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 . . 
    . 2 1 1 4 4 4 4 1 1 4 4 4 . 
    . 1 1 1 1 4 4 1 1 1 1 4 4 . 
    . 8 8 1 1 4 4 8 8 1 1 4 4 . 
    . 8 8 1 1 4 4 8 8 1 1 4 4 4 
    4 4 1 1 4 4 4 4 1 1 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 . 4 4 4 4 . 4 4 4 4 
    . 4 4 . . . 4 4 . . . 4 4 . 
    `, SpriteKind.Enemy)
let Blue_Ghost = sprites.create(img`
    . . . . . 8 8 8 8 . . . . . 
    . . . 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 1 1 8 8 8 8 1 1 8 8 8 . 
    . 1 1 1 1 8 8 1 1 1 1 8 8 . 
    . 8 8 1 1 8 8 8 8 1 1 8 8 . 
    . 8 8 1 1 8 8 8 8 1 1 8 8 8 
    8 8 1 1 8 8 8 8 1 1 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 . 8 8 8 8 . 8 8 8 8 
    . 8 8 . . . 8 8 . . . 8 8 . 
    `, SpriteKind.Enemy)
let Pink_Ghost = sprites.create(img`
    . . . . . 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 1 1 3 3 3 3 1 1 3 3 3 . 
    . 1 1 1 1 3 3 1 1 1 1 3 3 . 
    . 8 8 1 1 3 3 8 8 1 1 3 3 . 
    . 8 8 1 1 3 3 8 8 1 1 3 3 3 
    3 3 1 1 3 3 3 3 1 1 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 . 3 3 3 3 . 3 3 3 3 
    . 3 3 . . . 3 3 . . . 3 3 . 
    `, SpriteKind.Enemy)
let Cherry = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f f . 
    . . . . . . . . . . . f f e e f 
    . . . . . . . . . f f e e e e f 
    . . . . . . . . f e e . e f f . 
    . . . f f f f f e f . . e f . . 
    . . f 2 2 2 2 e f . . e f . . . 
    . f 2 2 2 2 e 2 2 f e f f . . . 
    . f 2 2 2 2 2 2 f 2 e 2 2 f . . 
    . f 2 1 2 2 2 f 2 2 e 2 2 2 f . 
    . f 2 2 1 2 2 f 2 2 2 2 2 2 f . 
    . . f 2 2 2 2 f 2 1 2 2 2 2 f . 
    . . . f f f f f 2 2 1 2 2 2 f . 
    . . . . . . . . f 2 2 2 2 f . . 
    . . . . . . . . . f f f f . . . 
    `, SpriteKind.Food)
controller.moveSprite(PAC_Man)
Red_Ghost.follow(PAC_Man, randint(40, 90))
Orange_ghost.follow(PAC_Man, randint(40, 90))
Blue_Ghost.follow(PAC_Man, randint(40, 90))
Pink_Ghost.follow(PAC_Man, randint(40, 90))
scene.cameraFollowSprite(PAC_Man)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(PAC_Man, assets.tile`myTile42`)
tiles.placeOnRandomTile(Red_Ghost, assets.tile`myTile36`)
tiles.placeOnRandomTile(Orange_ghost, assets.tile`myTile36`)
tiles.placeOnRandomTile(Blue_Ghost, assets.tile`myTile36`)
tiles.placeOnRandomTile(Pink_Ghost, assets.tile`myTile36`)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(740, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(622, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(740, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(622, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(523, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(523, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(784, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(659, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(523, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(784, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(659, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(740, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(622, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(622, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(622, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(622, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(659, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(698, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(698, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(740, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(784, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(784, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(831, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(880, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
