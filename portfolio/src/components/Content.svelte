<script>
    import Trigger from '@components/common/Trigger.svelte';
    import { scrollPos, springScrollPos } from '@stores/scroll.store';
    import Reveal from '@components/common/Reveal.svelte';
    import FadeOut from '@components/common/FadeOut.svelte';
    import { createSheetObjectAction, Sequence } from '@threlte/theatre';

    const sheetObject = createSheetObjectAction();
</script>

<Trigger
  in={0.6}
  out={1.9}
>
  <svelte:fragment>
    {@const start = 0.6}
    {@const stagger = 0.4}
    {@const duration = 0.6}
    {@const outStart = 1.2}
    {@const outEnd = 1.7}
    <div
      class="pointer-events-auto fixed top-40 left-0 hidden ml-12 w-screen p-12 md:flex"
    >
      <div class="col-span-1 z-50">
        <FadeOut
          progress={$springScrollPos}
          from={outStart}
          to={outEnd}
        >
          <Reveal
            progress={$springScrollPos}
            from={start}
            to={start + duration}
          >
            {#if $scrollPos >= start + duration}
              <Sequence autoplay />
            {/if}

            <div class="text-left text-4xl font-bold text-white/90">
                <span
                  class="relative inline-block"
                >
            <div
              class="bg-orange-600 absolute bottom-0 left-0 scale-x-100 -z-10 h-4 w-full origin-left"
            />
            Some things about me
          </span>
              :
            </div>
          </Reveal>
          <Reveal
            progress={$springScrollPos}
            from={start + 0.1}
            to={start + duration +0.1}
          >
            <ul class="list-none mt-8 text-white ml-20 text-2xl gap-5 flex flex-col">
              <li>
                I'm a 20 years old student in computer
                science
                specialised in web development at Toulouse
                Ynov
                Campus at France.
              </li>
              <li>
                I'm passionate about web development, and
                I'm
                currently learning about it.

              </li>
              <li>
                I'm also interested in devOps, and I'm
                learning
                about it too.
              </li>
              <li>
                I'm a passionate person who loves to learn
                new
                things and to share my knowledge with
                others.
              </li>
            </ul>
          </Reveal>
        </FadeOut>
      </div>

      <!--        <div class="col-span-1">-->
      <!--          <Reveal-->
      <!--            progress={$springScrollPos}-->
      <!--            from={start + stagger}-->
      <!--            to={start + stagger + duration}-->
      <!--          >-->
      <!--            <FadeOut-->
      <!--              progress={$springScrollPos}-->
      <!--              from={outStart}-->
      <!--              to={outEnd}-->
      <!--            >-->
      <!--              <h3 class="mb-2 text-2xl font-bold text-white/90">Reimagine the Web</h3>-->
      <!--              <p class="text-sm text-white/60">-->
      <!--                With AR and VR picking up steam, the web is becoming more and more 3D. Threlte-->
      <!--                provides a simple, declarative API for creating 3D content on the web.-->
      <!--              </p>-->
      <!--            </FadeOut>-->
      <!--          </Reveal>-->
      <!--        </div>-->

      <!--        <div class="col-span-1">-->
      <!--          <Reveal-->
      <!--            progress={$springScrollPos}-->
      <!--            from={start + stagger * 2}-->
      <!--            to={start + stagger * 2 + duration}-->
      <!--          >-->
      <!--            <FadeOut-->
      <!--              progress={$springScrollPos}-->
      <!--              from={outStart}-->
      <!--              to={outEnd}-->
      <!--            >-->
      <!--              <h3 class="mb-2 text-2xl font-bold text-white/90">Powerful Integrations</h3>-->
      <!--              <p class="text-sm text-white/60">-->
      <!--                Threlte comes with integrations for physics, animation and 3D model loading.-->
      <!--              </p>-->
      <!--            </FadeOut>-->
      <!--          </Reveal>-->
      <!--        </div>-->
    </div>
  </svelte:fragment>
</Trigger>

<!--{#if +opacity.toFixed(2) > 0.1}-->

<!--  <div-->
<!--    style="opacity: {opacity}"-->
<!--    class="fixed top-0 left-0 flex w-screen flex-col ml-16 px-8 sm:mt-[25vh] md:mt-[30vh]"-->
<!--  >-->
<!--    <div class="max-w-[500px] text-center text-4xl font-bold text-white/90">-->
<!--    <span class="relative inline-block">-->
<!--              <div-->
<!--                class="bar bg-orange-600 absolute bottom-0 left-0 -z-10 h-4 w-full origin-left"-->
<!--                style="transform: scaleX(0);"-->
<!--              >-->
<!--              </div>-->
<!--            Some things about me-->
<!--            </span>-->
<!--      :-->
<!--    </div>-->


<!--    </ul>-->
<!--  </div>-->
<!--{/if}-->

<!--<style>-->
<!--    .bar {-->
<!--        animation: scale 1s forwards;-->
<!--    }-->

<!--    @keyframes scale {-->
<!--        10% {-->
<!--            transform: scaleX(0.1);-->
<!--        }-->
<!--        20% {-->
<!--            transform: scaleX(0.2);-->
<!--        }-->
<!--        30% {-->
<!--            transform: scaleX(0.3);-->
<!--        }-->
<!--        40% {-->
<!--            transform: scaleX(0.4);-->
<!--        }-->
<!--        50% {-->
<!--            transform: scaleX(0.5);-->
<!--        }-->
<!--        60% {-->
<!--            transform: scaleX(0.6);-->
<!--        }-->
<!--        70% {-->
<!--            transform: scaleX(0.7);-->
<!--        }-->
<!--        80% {-->
<!--            transform: scaleX(0.8);-->
<!--        }-->
<!--        90% {-->
<!--            transform: scaleX(0.9);-->
<!--        }-->
<!--        100% {-->
<!--            transform: scaleX(1);-->
<!--        }-->
<!--    }-->
<!--</style>-->