<script lang="ts">
	import { browser } from '$app/environment';
	import Session from '../components/Session.svelte';
	import Start from '../components/Start.svelte';

	let sessionPage = $state(false);
	let daku = $state(browser ? window.localStorage.getItem('daku') === 'true' : true);
	let handa = $state(browser ? window.localStorage.getItem('handa') === 'true' : true);
	let yoon = $state(browser ? window.localStorage.getItem('yoon') === 'true' : true);

	let answerMode: 'BUTTONS' | 'TEXT_INPUT' = $state(
		browser
			? ((window.localStorage.getItem('answerMode') as 'BUTTONS' | 'TEXT_INPUT') ?? 'BUTTONS')
			: 'BUTTONS'
	);

	$effect(() => {
		window.localStorage.setItem('daku', `${daku}`);
		window.localStorage.setItem('handa', `${handa}`);
		window.localStorage.setItem('yoon', `${yoon}`);
		window.localStorage.setItem('answerMode', `${answerMode}`);
	});
</script>

<svelte:head>
	<title>Hiragana Guess</title>
</svelte:head>

{#if sessionPage}
	<Session bind:sessionPage {daku} {handa} {yoon} {answerMode} />
{:else}
	<Start bind:sessionPage bind:daku bind:handa bind:yoon bind:answerMode />
{/if}
