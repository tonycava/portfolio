<script lang="ts">
	import { fade } from 'svelte/transition';

	export let progress: number;
</script>

<div
  transition:fade|local={{
			duration: 200
		}}
  class="z-50 absolute w-screen h-screen top-0 left-0 bg-secondary flex flex-col gap-1 items-center justify-center text-primary"
>
  <p class="text-sm z-30 text-primary">Loading</p>
  <div class="w-1/3 h-3 border-solid border-2 border-primary">
    <div
      class="h-full bg-primary"
      style="width: {progress * 100}%"
    />
  </div>
</div>