<script lang="ts">
	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import Loader from '../components/Loader.svelte';
	import App from './App.svelte';

	const { progress } = useProgress();
	const tweenedProgress = tweened($progress, {
		duration: 800
	});
	$: tweenedProgress.set($progress);
</script>

{#if $tweenedProgress < 1}
  <Loader progress={$tweenedProgress} />
{/if}

<App />

