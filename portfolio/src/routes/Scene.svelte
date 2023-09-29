<script lang="ts">
	import { T, useFrame, useLoader } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { DoubleSide, TextureLoader } from 'three';
	import type { AnimationScript } from '../models';
	import {
		calculateScrollPercent,
		getRandomParticlePos,
		lerp,
		playScrollAnimations,
		scalePercent
	} from '$lib';
	import Background from '../components/Background.svelte';

	interactivity();
	const scale = spring(1);
	const textureSvelte = useLoader(TextureLoader)
		.load('/svelte.png');

	const points = getRandomParticlePos(4002);
	const animationScripts: AnimationScript[] = [];

	let scrollPercent = 0;
	let mouseX = 0;
	let mouseY = 0;
	let posX = 6;
	let opacity = 1;
	let posY = -5;
	let rotation = 0;

	animationScripts.push({
		start: 20,
		end: 40,
		do: () => {
			posX = lerp(
				6, -1, scalePercent(scrollPercent, 20, 40)
			);
			posY = lerp(
				-5, 1, scalePercent(scrollPercent, 20, 40)
			);

			if (scrollPercent >= 35) {
				opacity = +lerp(
					1, 0, scalePercent(scrollPercent, 20, 40)
				).toFixed(0);
			} else {
				opacity = 1;
			}
		},
	});

	animationScripts.push({
		start: 0,
		end: 101,
		do: (delta) => {
			for (let i = 0; i < points.length; i += 3) {
				points[i + 1] -= delta * 0.1;

				if (points[i + 1] < -2) {
					points[i + 1] = (Math.random() - 0.5) * 10;
				}
			}

			rotation += delta;
		}
	});


	onMount(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		window.addEventListener('scroll', () => {
			scrollPercent = calculateScrollPercent();
		});

		window.addEventListener('mousemove', (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		});
	});

	useFrame((state, delta) => {
		playScrollAnimations(
			animationScripts,
			scrollPercent,
			delta
		);
	});
</script>

<T.PerspectiveCamera
  makeDefault
  fov={75}
  aspect={window.innerWidth / window.innerHeight}
  near={0.1}
  far={1000}
  position.z={2}
/>

<T.Mesh
  rotation.y={rotation}
  position.y={posY}
  position.x={posX}
  position.z={-3}
  scale={$scale}
  on:pointerenter={() => {
      scale.set(1.5)
  }}
  on:pointerleave={() => scale.set(1)}
>
  <T.PlaneGeometry />
  <T.MeshBasicMaterial
    {opacity}
    transparent={true}
    side={DoubleSide}
    map={$textureSvelte}
  />
</T.Mesh>

<Background
  {points}
  position={{x: mouseY * 0.0001, y: mouseX * 0.0001, z: 0}}
/>
