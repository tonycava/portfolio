<script lang="ts">
	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import Loader from '@components/Loader.svelte';
	import { Sheet } from '@threlte/theatre';
	import Header from '@components/Header.svelte';
	import Intro from '@components/Intro/Intro.svelte';
	import Main from '@components/Main.svelte';
	import Content from '@components/Content.svelte';

	const { progress } = useProgress();
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
  <div class="pointer-events-auto contents">
    <Sheet name="Intro">
      <Intro progress={$tweenedProgress} />
    </Sheet>
    <Sheet name="Content">
      <Content />
    </Sheet>
  </div>
</Main>
<!--<Footer />-->
