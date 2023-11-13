<script lang="ts">
	import { springScrollPos } from '@stores/scroll.store';
	import FadeOut from '@components/common/FadeOut.svelte';
	import TheatreTextBox
		from '@components/common/TheatreTextBox.svelte';
	import {
		createSheetObjectAction,
		Sequence
	} from '@threlte/theatre';
	import { types } from '@theatre/core';
	import Pulse from '@components/Pulse.svelte';

	const sheetObject = createSheetObjectAction();
	export let progress: number;
</script>

{#if progress === 1}
  <Sequence autoplay />
{/if}

<FadeOut
  progress={$springScrollPos}
  from={0.3}
  to={0.6}
>
  <div
    class="fixed top-0 left-0 mt-[18vh] flex w-screen flex-col items-center justify-center gap-12 px-8 sm:mt-[25vh] md:mt-[30vh]"
    style="transform: translateY({$springScrollPos * -50}px)"
  >
    <div>
      <TheatreTextBox key="hello">
        <div class="mb-2 text-center text-xl text-white/60">
          Hello !
        </div>
      </TheatreTextBox>

      <TheatreTextBox key="statement">
        <div class="max-w-[450px] text-center text-4xl font-bold text-white/90">
          My name is Anthony CAVAGNE a junior
          <span
            class="relative inline-block"
          >
            <div
            use:sheetObject={{
                key: 'underline',
                props: {
                  scaleX: types.number(0, {
                    range: [0, 1]
                  })
                },
                callback(node, props) {
                  node.style.transform = `scaleX(${props.scaleX})`
                }
              }}
            class="bg-orange-600 absolute bottom-0 left-0 -z-10 h-4 w-full origin-left will-change-transform"
            />
            web developer
          </span>
          .
        </div>
      </TheatreTextBox>
    </div>
    <TheatreTextBox key="pulse">
      <div
        class="flex justify-center z-50 pulse"
      >
        <Pulse />
      </div>
    </TheatreTextBox>
  </div>
</FadeOut>
<!--    </div>-->

