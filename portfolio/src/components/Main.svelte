<script>
    import { Canvas } from '@threlte/core';
    import Scene from '../routes/Scene.svelte';
    import Pulse from '@components/Pulse.svelte';
</script>

<main class="mx-auto pt-[10svh] max-w-7xl px-6 pb-12">
  <div class="relative h-[500vh] z-20">
    <div class="fixed top-0 left-0 z-10 h-[100lvh] w-screen">
      <Canvas rendererParameters={{alpha: true}}>
        <Scene />
      </Canvas>
    </div>
<!--    <Pulse />-->
  </div>
</main>