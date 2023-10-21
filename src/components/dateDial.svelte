<script lang="ts">
	import ArrowDownIcon from '../../static/chevron-down.svg?raw';
	import ArrowUpIcon from '../../static/chevron-up.svg?raw';

	const MONTH: string[] = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const monthName = (month: number) => {
		return MONTH[month];
	};
	export let month: string = monthName(0);
	export let day: string = '10';

	const monthCount = (props: string, count: number) => {
		const crrentMonth = MONTH.indexOf(props);

		let num: number = crrentMonth + count;
		if (num < 0) {
			num = 11;
		} else if (num > 11) {
			num = 0;
		}
		return monthName(num);
	};

	const monthMaxDay = (month: number) => {
		switch (month) {
			case 3:
			case 5:
			case 8:
			case 10:
				return 30;
			case 1:
				return 28;
			default:
				return 31;
		}
	};

	const dayCount = (props: string, count: number) => {
		let num: number = Number(props) + count;
		const crrentMonth = MONTH.indexOf(month);
		const maxDay = monthMaxDay(crrentMonth);
		if (num < 1) {
			num = maxDay;
		} else if (num > maxDay) {
			num = 1;
		}
		return num.toString();
	};

	const handleDateCountClick = (type: string, count: number, props: string, event: MouseEvent) => {
		event.preventDefault();
		if (type === 'month') {
			month = monthCount(props, count);
		} else if (type === 'day') {
			day = dayCount(props, count);
		}
	};
</script>

<div class="flex w-full justify-center items-center space-x-3">
	<div class="flex flex-col justify-center items-center text-2xl">
		<button
			on:click={(event) => {
				handleDateCountClick('month', +1, month, event);
			}}>{@html ArrowUpIcon}</button
		>
		<input
			type="text"
			bind:value={month}
			class="w-20 h-24 px-2 text-center border-none focus:outline-none"
		/>
		<button
			on:click={(event) => {
				handleDateCountClick('month', -1, month, event);
			}}
			type="button">{@html ArrowDownIcon}</button
		>
	</div>
	<div class="flex flex-col justify-center items-center text-2xl">
		<button
			on:click={(event) => {
				handleDateCountClick('day', +1, day, event);
			}}>{@html ArrowUpIcon}</button
		>
		<input
			type="text"
			bind:value={day}
			class="w-20 h-24 px-2 text-center border-none focus:outline-none"
		/>
		<button
			on:click={(event) => {
				handleDateCountClick('day', -1, day, event);
			}}>{@html ArrowDownIcon}</button
		>
	</div>
</div>
