<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { Checkbox } from '@/components/ui/checkbox';
	import { Label } from '@/components/ui/label';

	let {
		sessionPage = $bindable(),
		daku = $bindable(),
		handa = $bindable(),
		yoon = $bindable()
	}: {
		sessionPage: boolean;
		daku: boolean;
		handa: boolean;
		yoon: boolean;
	} = $props();
</script>

<div class="column flex min-h-dvh flex-col">
	<div class="mx-auto mt-auto flex flex w-full max-w-2xl flex-1 flex-col justify-center gap-2 p-4">
		<div class="flex items-center space-x-2">
			<Checkbox id="dakuten" bind:checked={daku} aria-labelledby="dakuten-label" />
			<Label
				id="dakuten-label"
				for="dakuten"
				class="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Dakuten
				<a href="//en.wikipedia.org/wiki/Dakuten_and_handakuten" target="_blank" aria-label="Help">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="inline"
					>
						<circle cx="12" cy="12" r="10" />
						<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
						<path d="M12 17h.01" />
					</svg>
				</a>
			</Label>
		</div>

		<div class="flex items-center space-x-2">
			<Checkbox id="handakuten" bind:checked={handa} aria-labelledby="handakuten-label" />
			<Label
				id="handakuten-label"
				for="handakuten"
				class="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Handakuten
				<a href="//en.wikipedia.org/wiki/Dakuten_and_handakuten" target="_blank" aria-label="Help">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="inline"
					>
						<circle cx="12" cy="12" r="10" />
						<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
						<path d="M12 17h.01" />
					</svg>
				</a>
			</Label>
		</div>

		<div class="flex items-center space-x-2">
			<Checkbox id="yoon" bind:checked={yoon} aria-labelledby="yoon-label" />
			<Label
				id="yoon-label"
				for="yoon"
				class="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Yōon
				<a href="//en.wikipedia.org/wiki/Y%C5%8Don" target="_blank" aria-label="Help">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="inline"
					>
						<circle cx="12" cy="12" r="10" />
						<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
						<path d="M12 17h.01" />
					</svg>
				</a>
			</Label>
		</div>
	</div>

	<div class="mx-auto mt-auto flex w-full max-w-2xl flex-row justify-stretch gap-4 p-4 md:gap-4">
		<Button
			onclick={() => {
				sessionPage = true;
			}}
			variant="default"
			size="lg"
			class="grow px-0 text-2xl md:text-3xl">start</Button
		>
	</div>
</div>
