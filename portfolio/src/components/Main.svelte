<script>
    import { Canvas } from '@threlte/core';
    import Scene from '../routes/Scene.svelte';
    import { NoToneMapping } from 'three';
    import state from '../data/state.json';
    import { Theatre } from '@threlte/theatre';
</script>

<main class="mx-auto pt-[10svh] max-w-7xl px-6 pb-12">
  <div class="relative h-[500vh] z-20">
    <Theatre
      config={{ state }}
      studio={{ enabled: false }}
    >
      <div class="fixed top-0 left-0 z-10 h-[100lvh] w-screen">
        <Canvas
          toneMapping={NoToneMapping}
          rendererParameters={{
          powerPreference: 'high-performance',
          antialias: true,
          stencil: false,
          depth: false,
          premultipliedAlpha: false
        }}
        >
          <Scene />
        </Canvas>
      </div>
      <slot />
    </Theatre>
  </div>
</main>