<script lang="ts">
	import { useTexture } from '@threlte/extras';
	import { T } from '@threlte/core';

	export let textureSrc = '/star.png';
	export let position: { x: number; y: number; z: number; } = { x: 0, y: 0, z: 0 };
	export let points: Float32Array;

	const map = useTexture(textureSrc);
</script>

<T.Points
  position.x={position.x}
  position.y={position.y}
  position.z={position.z}
>
  <T.BufferGeometry>
    <T.BufferAttribute
      args={[points, 3]}
      attach={(parent, self) => {
        parent.setAttribute('position', self)
        return () => {
          // cleanup function called when ref changes or the component unmounts
          // https://threlte.xyz/docs/reference/core/t#attach
        }
      }}
    />
  </T.BufferGeometry>
  {#await map then texture}
    <T.PointsMaterial
      size={0.05}
      transparent={true}
      map={texture}
    />
  {:catch err}
    <T.PointsMaterial
      size={0.05}
    />
  {/await}
</T.Points>