import { randFloatSpread } from 'three/src/math/MathUtils';

export const getRandomParticlePos = (numberOfParticles: number) => {
	const positions = new Float32Array(numberOfParticles);
	for (let i = 0; i < numberOfParticles; i += 3) {
		const [x, y, z] = [i, i + 1, i + 2];
		positions[x] = randFloatSpread(25);
		positions[y] = randFloatSpread(25);
		positions[z] = randFloatSpread(25);
	}
	return positions;
};