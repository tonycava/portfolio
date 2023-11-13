<script lang="ts">
	import { scrollPos } from '@stores/scroll.store';

	let _in: number | undefined = undefined
	let _out: number | undefined = undefined

	export { _in as in }
	export { _out as out }
</script>

{#if (_in === undefined || $scrollPos > _in) && (_out === undefined || $scrollPos < _out)}
  <slot />
{:else}

{/if}