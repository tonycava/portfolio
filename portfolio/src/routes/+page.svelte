<script lang="ts">
	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import Loader from '../components/Loader.svelte';
	import Header from '@components/Header.svelte';
	import Main from '@components/Main.svelte';
	import Presentation
		from '@components/Presentation.svelte';

	const { progress } = useProgress();
	$: console.log($progress);
	const tweenedProgress = tweened($progress, {
		duration: 800
	});
	$: tweenedProgress.set($progress);
</script>

{#if $tweenedProgress < 1}
  <Loader progress={$tweenedProgress} />
{/if}

<Header />
<Main>
  {#if $tweenedProgress === 1}
    <Presentation />
  {/if}
</Main>


<!--<Footer />-->
