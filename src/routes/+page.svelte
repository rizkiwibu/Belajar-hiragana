<script lang="ts">
	import { browser } from '$app/environment';
	import Session from '../components/Session.svelte';
	import Start from '../components/Start.svelte';

	let sessionPage = $state(false);
	let daku = $state(browser ? window.localStorage.getItem('daku') === 'true' : false);
	let handa = $state(browser ? window.localStorage.getItem('handa') === 'true' : false);
	let yoon = $state(browser ? window.localStorage.getItem('yoon') === 'true' : false);

	$effect(() => {
		window.localStorage.setItem('daku', `${daku}`);
		window.localStorage.setItem('handa', `${handa}`);
		window.localStorage.setItem('yoon', `${yoon}`);
	});
</script>

<svelte:head>
	<title>Hiragana Guess</title>
</svelte:head>

{#if sessionPage}
	<Session bind:sessionPage {daku} {handa} {yoon} />
{:else}
	<Start bind:sessionPage bind:daku bind:handa bind:yoon />
{/if}
