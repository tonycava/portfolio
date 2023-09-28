<script lang="ts">
  import { T } from '@threlte/core';
	import { useFrame, useLoader } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
  import { DoubleSide, TextureLoader } from 'three';

	interactivity();
	const scale = spring(1);
	const texture = useLoader(TextureLoader).load('/sp2.png');
	const textureSvelte = useLoader(TextureLoader).load('/svelte.png');

	let posX = -2;
	let prevScrollY = 0;

	const getRandomParticlePos = (numberOfParticles: number) => {
		const positions = new Float32Array(numberOfParticles);
		for (let i = 0; i < numberOfParticles; i++) {
			positions[i] = (Math.random() - 0.5) * 10;
		}
		return positions;
	};

	let positions = getRandomParticlePos(4002);


	function handleScroll() {
		const currentScrollY = window.scrollY;

		if (currentScrollY > prevScrollY) {
			posX += 0.1;
		} else if (currentScrollY < prevScrollY) {
			posX -= 0.1;
		}

		prevScrollY = currentScrollY;
	}

	let mouseX = 0;
	let mouseY = 0;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		window.addEventListener('mousemove', (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		});
	});


	let rotation = 0;

	useFrame((state, delta) => {
		for (let i = 0; i < positions.length - 3; i += 3) {
			positions[i + 1] -= delta * 0.1;

			if (positions[i + 1] < -2) {
				positions[i + 1] = (Math.random() - 0.5) * 10;
			}
		}

		rotation += delta;
	});
</script>

<T.PerspectiveCamera
  makeDefault
  position={[4, 4, 4]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<T.Mesh
  rotation.y={rotation}
  position.y={0}
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
    transparent={true}
    side={DoubleSide}
    map={$textureSvelte}
  />
</T.Mesh>

<T.Points
  position.x={mouseY * 0.0001}
  position.y={mouseX * 0.0001}
>
  <T.BufferGeometry>
    <T.BufferAttribute
      args={[positions, 3]}
      attach={(parent, self) => {
        parent.setAttribute('position', self)
        return () => {
          // cleanup function called when ref changes or the component unmounts
          // https://threlte.xyz/docs/reference/core/t#attach
        }
      }}
    />
  </T.BufferGeometry>
  <T.PointsMaterial
    size={0.05}
    transparent={true}
    map={$texture}
  />
</T.Points>
