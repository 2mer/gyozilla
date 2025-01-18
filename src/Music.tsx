import { useEffect, useState } from 'react';
import brokenCut from './assets/BrokenCut.strudel.js?raw';
// @ts-ignore
import { initStrudel } from '@strudel/web';
import SoundOn from './assets/sound-on.svg?react'
import SoundOff from './assets/sound-off.svg?react'

initStrudel();

function Music() {
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		if (playing) {
			// @ts-ignore
			evaluate(brokenCut)

			return () => {
				// @ts-ignore
				evaluate('stack()')
			}
		}
	})

	return (
		<div className='cursor-pointer flex items-center gap-4 px-8 py-4' onClick={() => setPlaying(prev => !prev)}>
			{playing ? <SoundOn className='w-[36px]' /> : <SoundOff className='w-[36px]' />}
			{playing && <span className='font-mono'>now playing "Broken Cut 1" by froos...</span>}
		</div>
	);
}

export default Music;