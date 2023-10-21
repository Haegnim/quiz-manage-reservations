<script lang="ts">
	import ArrowDownIcon from '../../static/chevron-down.svg?raw';
	import ArrowUpIcon from '../../static/chevron-up.svg?raw';
	export let hour: string = '00';
	export let minute: string = '00';
	export let meridiem: string = 'AM';

	const updateHourMinute = (props: string, count: number, max: number, min: number) => {
		let num: number = Number(props) + count;
		if (num < min) {
			num = max;
		} else if (num > max) {
			num = min;
		}
		const formattedNum = num < 10 ? '0' + num : num.toString();
		return formattedNum;
	};

	const hourCount = (props: string, count: number) => {
		hour = updateHourMinute(props, count, 12, 1);
	};

	const minuteCount = (props: string, count: number) => {
		minute = updateHourMinute(props, count, 59, 0);
	};

	const meridiemCount = (event: MouseEvent) => {
		event.preventDefault();
		meridiem = meridiem === 'AM' ? 'PM' : 'AM';
	};

	const handleTimeCountClick = (type: string, count: number, props: string, event: MouseEvent) => {
		event.preventDefault();
		if (type === 'hour') {
			hourCount(props, count);
		} else if (type === 'minute') {
			minuteCount(props, count);
		}
	};
</script>

<div class="flex w-full justify-center items-center space-x-3">
	<div class="flex flex-col justify-center items-center text-2xl">
		<button
			on:click={(event) => {
				handleTimeCountClick('hour', +1, hour, event);
			}}>{@html ArrowUpIcon}</button
		>
		<input
			type="text"
			bind:value={hour}
			class="w-20 h-24 px-2 text-center border-none focus:outline-none"
		/>
		<button
			on:click={(event) => {
				handleTimeCountClick('hour', -1, hour, event);
			}}
			type="button">{@html ArrowDownIcon}</button
		>
	</div>
	:
	<div class="flex flex-col justify-center items-center text-2xl">
		<button
			on:click={(event) => {
				handleTimeCountClick('minute', +1, minute, event);
			}}>{@html ArrowUpIcon}</button
		>
		<input
			type="text"
			bind:value={minute}
			class="w-20 h-24 px-2 text-center border-none focus:outline-none"
		/>
		<button
			on:click={(event) => {
				handleTimeCountClick('minute', -1, minute, event);
			}}>{@html ArrowDownIcon}</button
		>
	</div>
	<div class="flex flex-col justify-center items-center text-2xl ml-2">
		<button on:click={(event) => meridiemCount(event)}>{@html ArrowUpIcon}</button>
		<input
			type="text"
			value={meridiem}
			class="w-20 h-24 px-2 text-center border-none focus:outline-none"
		/>
		<button on:click={(event) => meridiemCount(event)}>{@html ArrowDownIcon}</button>
	</div>
</div>
