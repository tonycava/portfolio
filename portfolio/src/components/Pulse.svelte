<script>
    import Svg from '@components/common/Svg.svelte';

    export let opacity = 1;
    export let doAnimation = true;
</script>

<div
  class="z-40 {doAnimation ? 'pulse' : ''}"
  style="opacity: {opacity};"
>
  <div
    class="will-change-auto"
    style="transform: translateY(0%)"
  >
    <Svg
      className="animate-pulse -mb-[20px]"
      size={8}
      src="/icons/ChevronDown.svg"
    />
    <Svg
      className="animate-pulse1 -mb-[20px]"
      size={8}
      src="/icons/ChevronDown.svg"
    />
    <Svg
      className="animate-pulse2 -mb-[20px]"
      size={8}
      src="/icons/ChevronDown.svg"
    />
  </div>
</div>

<style>
    @keyframes opacity {
        10% {
            opacity: 0.1;
        }
        20% {
            opacity: 0.2;
        }
        30% {
            opacity: 0.3;
        }
        40% {
            opacity: 0.4;
        }
        50% {
            opacity: 0.5;
        }
        60% {
            opacity: 0.6;
        }
        70% {
            opacity: 0.7;
        }
        80% {
            opacity: 0.8;
        }
        90% {
            opacity: 0.9;
        }
        100% {
            opacity: 1;
        }
    }

    .pulse {
        animation: opacity 1s 1.2s linear;
    }
</style>