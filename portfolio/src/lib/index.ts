// place files you want to import through the `$lib` alias in this folder.
import type { AnimationScript } from '../models';
import { randFloatSpread } from 'three/src/math/MathUtils';

export const getRandomParticlePos = (numberOfParticles: number) => {
	const positions = new Float32Array(numberOfParticles);
	for (let i = 0; i < numberOfParticles; i += 3) {
		const [x, y, z] = [i, i + 1, i + 2];
		positions[x] = randFloatSpread(10)
		positions[y] = randFloatSpread(10)
		positions[z] = randFloatSpread(10)
	}
	return positions;
};

export const calculateScrollPercent = () => {
	return ((document.documentElement.scrollTop || document.body.scrollTop) /
			((document.documentElement.scrollHeight ||
					document.body.scrollHeight) -
				document.documentElement.clientHeight)) *
		100;
};

export function lerp(x: number, y: number, a: number): number {
	return (1 - a) * x + a * y;
}

// Used to fit the lerps to start and end at specific scrolling percentages
export function scalePercent(scrollPercent: number, start: number, end: number) {
	return (scrollPercent - start) / (end - start);
}

export function playScrollAnimations(animationScripts: AnimationScript[], scrollPercent: number, delta: number) {
	animationScripts.forEach((a) => {
		const isInRange = scrollPercent >= a.start && scrollPercent < a.end;
		if (isInRange) a.do(delta);
	});
}