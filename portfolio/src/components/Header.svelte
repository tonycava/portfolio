<script>
    import Svg from '@components/common/Svg.svelte';
</script>

<header class="fixed z-40 hidden h-[70px] w-screen flex-row items-center justify-between border-b border-blue-900/0 px-6 md:flex">
  <a
    href="/"
    class="flex items-center justify-center gap-5"
  >
    <img src="/favicon.ico" alt="logo" class="h-8" />
    <span class="text-3xl font-poppins-bold text-primary">tonycava</span>
  </a>

  <div class="flex items-center justify-center gap-5">
    <a
      href="https://github.com/tonycava/"
      class="z-50"
      target="_blank"
    >
      <Svg src="/icons/Github.svg" size={8} />
    </a>
    <a
      href="https://www.linkedin.com/in/anthony-cavagn%C3%A9-b9791b235/"
      class="z-50"
      target="_blank"
    >
      <Svg src="/icons/LinkeIn.svg" size={8} />
    </a>
    <a
      href="mailto:anthony.cavge@gmail.com"
      class="z-50"
      target="_blank"
    >
      <Svg src="/icons/Enveloppe.svg" size={8} />
    </a>
  </div>
</header>