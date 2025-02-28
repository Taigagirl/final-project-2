input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    button = randint(1, 6)
    if (button <= 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # . .
            . # # # .
            `)
        basic.showString("YOU WIN  PRESS A TO RESTART")
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . # #
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        . . # # #
        . . . # #
        . . # # #
        . . . # #
        . . # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # # #
        # # # # #
        # . # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        # # # # #
        . # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # .
        # # # # #
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # # # . .
        # # # # .
        # # # . .
        # # # # .
        `)
    basic.showLeds(`
        # # # . .
        # # . . .
        # # # . .
        # # . . .
        # # # . .
        `)
    basic.showLeds(`
        # # . . .
        # . . . .
        # # . . .
        # . . . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C D E F G F E D ", 120), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        `)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # # . #
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # #
            . # # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            . # # # .
            . # # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . # # .
            . # # # .
            . # # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            . # # # .
            . # # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # #
            . # # . .
            . # . # .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.pause(200)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
    basic.showString("Breathe")
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(300)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(300)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(300)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(300)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(300)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(300)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(300)
    }
    music.ringTone(262)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
let button = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
