<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { hiragana2roman, hiragana2romanKeys, hiragana2romanValues } from '@/mapping';
	import { shuffle } from '@/shuffle';

	type Answer = {
		value: string;
		wrong: boolean;
	};

	const getRandomSessionAnswers = () => {
		return shuffle(hiragana2romanKeys);
	};

	let sessionAnswers = $state(getRandomSessionAnswers());
	let sessionIndex = $state(0);
	let sessionProgress = $derived.by(() => {
		return (sessionIndex / sessionAnswers.length) * 100;
	});

	const getRandomHiraganaAnswers = () => {
		const character = sessionAnswers[sessionIndex];
		const answer = hiragana2roman.get(character)!;

		const answers = shuffle([
			answer,
			...shuffle(
				hiragana2romanValues.filter((v) => v != answer && v.length === answer.length)
			).slice(0, 3)
		]).map((v) => ({ value: v, wrong: false }) as Answer);

		return {
			character,
			answer,
			answers
		};
	};

	let hiragana = $state(getRandomHiraganaAnswers());

	const setAnswer = (answer: string, index: number) => {
		if (answer === hiragana.answer) {
			sessionIndex += 1;
			if (sessionIndex >= sessionAnswers.length) {
				sessionAnswers = getRandomSessionAnswers();
				sessionIndex = 0;
			}
			hiragana = getRandomHiraganaAnswers();
		} else {
			hiragana.answers[index].wrong = true;
		}
	};
</script>

<svelte:head>
	<title>Hiragana Guess</title>
</svelte:head>

<div class="column flex min-h-dvh flex-col">
	<div class="flex items-center justify-center p-2">
		<div class="h-1 max-w-80 grow rounded bg-slate-700">
			<div class="h-1 rounded bg-slate-200" style="width: {sessionProgress}%;"></div>
		</div>
	</div>

	<div class="flex flex-1 items-center justify-center font-jp text-[10rem] md:text-[12rem]">
		{hiragana.character}
	</div>

	<div class="flex flex-row justify-center gap-2 py-6 md:gap-4">
		{#each hiragana.answers as answer, i}
			<Button
				onclick={() => {
					setAnswer(answer.value, i);
				}}
				variant={answer.wrong ? 'destructive' : 'default'}
				disabled={answer.wrong}
				size="lg"
				class="w-16 text-2xl md:w-24 md:text-3xl"
			>
				{answer.value}
			</Button>
		{/each}
	</div>
</div>
