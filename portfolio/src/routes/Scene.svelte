<script lang="ts">
	import { T, useFrame, useLoader } from '@threlte/core';
	import {
		Grid,
		interactivity,
		OrbitControls
	} from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { DoubleSide, TextureLoader } from 'three';
	import { getRandomParticlePos, } from '$lib';
	import Background from '../components/Background.svelte';
	import {
		_springScrollPos,
		mouseCoords,
		mouseCoordsSpring,
		scrollPos,
		springScrollPos
	} from '@stores/scroll.store';
	import { debug } from '@stores/debug.store';
	import { Sequence, SheetObject } from '@threlte/theatre';
	import FadeOut from '@components/common/FadeOut.svelte';
	import Trigger from '@components/common/Trigger.svelte';

	const { DirectionalLightHelper } = T;

	$: console.log($springScrollPos);

	interactivity();
	const scale = spring(1);
	const textureSvelte = useLoader(TextureLoader)
		.load('/svelte.png');

	const points = getRandomParticlePos(6000);

	let opacity = 0;

	let rotation = 0;

	const onScroll = () => {
		const newScrollPos = Math.max(
			window.scrollY / window.innerHeight, 0
		);
		scrollPos.set(newScrollPos);
		_springScrollPos.set(newScrollPos);
	};

	const onMouseMove = (e: MouseEvent) => {
		const x = e.clientX / window.innerWidth;
		const y = e.clientY / window.innerHeight;
		mouseCoords.set({ x, y });
		mouseCoordsSpring.set({ x, y });
	};

	onMount(() => {
		const newScrollPos = Math.max(
			window.scrollY / window.innerHeight, 0);
		scrollPos.set(newScrollPos);
		_springScrollPos.set(newScrollPos, {
			hard: true
		});
	});

	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'd') debug.set(!debug.current);
	};

	useFrame((state, delta) => {
		rotation += delta;
	});

</script>

<svelte:window
  on:keydown={onKeyDown}
  on:scroll={onScroll}
  on:mousemove={onMouseMove}
/>

{#if $debug}
  <Grid />
{/if}


<T.PerspectiveCamera
  makeDefault={true}
  fov={75}
  position={[0, 0, 5]}
  aspect={window.innerWidth / window.innerHeight}
  near={0.1}
  far={1000}
>
  {#if $debug}
    <OrbitControls />
  {/if}
</T.PerspectiveCamera>

<Trigger
  in={0.65}
  out={1.7}
>
  <Sequence autoplay />
  <FadeOut
    progress={$springScrollPos}
    from={1.2}
    to={1.7}
  >
    <SheetObject
      let:Sync
      let:Transform
      key="first"
    >
      <Transform>
        <T.Mesh
          rotation.y={rotation}
          scale={$scale}
        >
          <T.PlaneGeometry args={[2,2]} />
          <T.MeshBasicMaterial
            let:ref
            transparent={true}
            side={DoubleSide}
            map={$textureSvelte}
          >
            <Sync
              type={ref}
              color
              side
              opacity
            />
          </T.MeshBasicMaterial>
        </T.Mesh>
      </Transform>

    </SheetObject>
  </FadeOut>
</Trigger>

<Background
  {points}
  position={{x: $mouseCoordsSpring.y * 0.1, y: $mouseCoordsSpring.x * 0.1, z: 0}}
/>
