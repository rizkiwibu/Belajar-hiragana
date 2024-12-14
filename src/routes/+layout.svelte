<script lang="ts">
	import '@fontsource/jetbrains-mono/400.css';
	import '@fontsource/noto-sans-jp/400.css';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="font-main min-h-dvh">
	{@render children()}
</div>
