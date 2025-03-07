// "broken cut 1" @by froos
// @version 1.0

samples('github:tidalcycles/dirt-samples')
samples({
	'slap': 'https://cdn.freesound.org/previews/495/495416_10350281-lq.mp3',
	'whirl': 'https://cdn.freesound.org/previews/495/495313_10350281-lq.mp3',
	'attack': 'https://cdn.freesound.org/previews/494/494947_10350281-lq.mp3'
})

setcps(1.25)

note("[c2 ~](3,8)*2,eb,g,bb,d").s("sawtooth")
	.noise(0.3)
	.lpf(perlin.range(800, 2000).mul(0.6))
	.lpenv(perlin.range(1, 5)).lpa(.25).lpd(.1).lps(0)
	.add.mix(note("<0!3 [1 <4!3 12>]>")).late(.5)
	.vib("4:.2")
	.room(1).roomsize(4).slow(4)
	.stack(
		s("bd").late("<0.01 .251>"),
		s("breaks165:1/2").fit()
			.chop(4).sometimesBy(.4, ply("2"))
			.sometimesBy(.1, ply("4")).release(.01)
			.gain(1.5).sometimes(mul(speed("1.05"))).cut(1)
		,
		s("<whirl attack>?").delay(".8:.1:.8").room(2).slow(8).cut(2),
	).reset("<x@30 [x*[8 [8 [16 32]]]]@2>".late(2))