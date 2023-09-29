<script>
    import Pulse from '@components/Pulse.svelte';
    import { calculateScrollPercent, lerp, scalePercent } from '$lib';
    import { animationScripts } from '@stores/animation.store';

    let pulseOpacity = 0;

    $animationScripts.push({
        start: 1,
        end: 10,
        do: () => {
            const scrollPercent = calculateScrollPercent();

            pulseOpacity = lerp(
                1, 0, scalePercent(scrollPercent, 1, 10)
            );
        }
    });

    setTimeout(() => {
        pulseOpacity = 1;
    }, 2200);
</script>

<div class="fixed top-0 left-0 mt-[18vh] flex w-screen flex-col items-center justify-center gap-12 px-8 sm:mt-[25vh] md:mt-[30vh]">
  <div>
    <div style="opacity: 1; transform: translate(0px, 0px);">
      <div
        class="reveal header"
        style="--progress: 0;"
      >
        <div style="opacity: 1;">
          <div class="mb-2 text-center text-xl text-white/60">
            Hello !
          </div>
        </div>
      </div>
    </div>

    <div style="opacity: 1; transform: translate(0px, 0px);">
      <div
        class="reveal body"
        style="--progress: 0;"
      >
        <div style="opacity: 1;">
          <div class="max-w-[500px] text-center text-4xl font-bold text-white/90">
            My name is Anthony CAVAGNE a junior
            <span class="relative inline-block">
              <div
                class="bar bg-orange-600 absolute bottom-0 left-0 -z-10 h-4 w-full origin-left"
                style="transform: scaleX(0);"
              >
              </div>
            web devloper
            </span>
            .
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-center mt-10 z-50 pulse"
    >
      <Pulse opacity={pulseOpacity} />
    </div>
  </div>
</div>

<style>
    @keyframes progress {
        10% {
            --progress: 0.1;
        }
        20% {
            --progress: 0.2;
        }
        30% {
            --progress: 0.3;
        }
        40% {
            --progress: 0.4;
        }
        50% {
            --progress: 0.5;
        }
        60% {
            --progress: 0.6;
        }
        70% {
            --progress: 0.7;
        }
        80% {
            --progress: 0.8;
        }
        90% {
            --progress: 0.9;
        }
        100% {
            --progress: 1;
        }
    }

    @keyframes scale {
        10% {
            transform: scaleX(0.1);
        }
        20% {
            transform: scaleX(0.2);
        }
        30% {
            transform: scaleX(0.3);
        }
        40% {
            transform: scaleX(0.4);
        }
        50% {
            transform: scaleX(0.5);
        }
        60% {
            transform: scaleX(0.6);
        }
        70% {
            transform: scaleX(0.7);
        }
        80% {
            transform: scaleX(0.8);
        }
        90% {
            transform: scaleX(0.9);
        }
        100% {
            transform: scaleX(1);
        }
    }

    .header {
        animation: progress 1s linear forwards;
    }

    .body {
        animation: progress 1.5s .6s linear forwards;
    }

    .bar {
        animation: scale 1s 1.2s forwards;
    }

    .reveal {
        --enter: calc(var(--progress) * 200%);
        --leave: calc(var(--enter) - 100%);
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-position-x: center;
        -webkit-mask-position-y: center;
        -webkit-mask-size: cover;
        mask-size: cover;
        -webkit-mask-image: linear-gradient(90deg, #000 var(--leave), transparent var(--enter));
        mask-image: linear-gradient(90deg, #000 var(--leave), transparent var(--enter));
    }
</style>