input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
basic.forever(function () {
	
})
