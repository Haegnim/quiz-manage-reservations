<script lang="ts">
	import PlusIcon from '../../static/math-plus.svg?raw';
	import MinusIcon from '../../static/math-minus.svg?raw';
	import Button from './common/button.svelte';
	export let count: number = 0;
	export let eventHandler: () => void = () => {};
	const MIN_GUESTS = 0;
	const MAX_GUESTS = 8;

	const handlePlusClick = () => {
		if (MAX_GUESTS > count) {
			count += 1;
		}
		eventHandler && eventHandler();
	};

	const handleMinusClick = () => {
		if (MIN_GUESTS < count) {
			count -= 1;
		}
		eventHandler && eventHandler();
	};
</script>

<div class="flex justify-between items-center gap-5">
	Guests
	<Button handleClick={handleMinusClick} customClass={'flex-1'}>
		{@html MinusIcon}
	</Button>
	<span class="w-4 text-center">
		{count}
	</span>
	<Button handleClick={handlePlusClick} customClass={'flex-1'}>
		{@html PlusIcon}
	</Button>
</div>
