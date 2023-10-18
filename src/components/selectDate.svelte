<script lang="ts">
	import Button from './common/button.svelte';
	import DateCheckIcon from '../../static/event_available.svg?raw';
	import Alarm from '../../static/alarm_on.svg?raw';
	import Today from '../../static/today.svg?raw';
	import Trash from '../../static/trash.svg?raw';
	import ArrowDownIcon from '../../static/chevron-down.svg?raw';
	import ArrowUpIcon from '../../static/chevron-up.svg?raw';
	let handleClick = () => {};
	const handleTrashClick = (event: MouseEvent) => {
		event.preventDefault();
		console.log('Trash button clicked');
		// 여기에 Trash 버튼을 클릭했을 때 수행할 동작을 작성합니다.
	};

	const handleSeatedClick = (event: MouseEvent) => {
		event.preventDefault();
		console.log('Seated button clicked');
		// 여기에 Seated 버튼을 클릭했을 때 수행할 동작을 작성합니다.
	};

	let hour: string = '00';
	let minute: string = '00';
	let meridiem: string = 'AM';
	let time: string = hour + ':' + minute + ' ' + meridiem;

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
		console.log('hourCount');
		hour = updateHourMinute(props, count, 12, 1);
	};

	const minuteCount = (props: string, count: number) => {
		console.log('minuteCount');
		minute = updateHourMinute(props, count, 59, 0);
	};

	const handleInputKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			hour = updateHourMinute(hour, 0, 12, 1);
		}
	};

	const handleUpClick = (type: string, count: number, props: string, event: MouseEvent) => {
		event.preventDefault();
		console.log('handleUpClick');
		if (type === 'hour') {
			hourCount(props, count);
		} else if (type === 'minute') {
			minuteCount(props, count);
		}
	};
	let month: string = 'May';
	let day: string = '10';
</script>

<Button {handleClick} customClass={'flex-1'}>{@html DateCheckIcon} Select Date</Button>
<div class="bg-overlay">
	<div class="modal">
		<div class="input-box row">
			<label for="time">
				{@html Alarm}
			</label>
			<input id="time" class="dial-result" value={hour + ':' + minute + ' ' + meridiem} readonly />
		</div>
		<div class="input-box row">
			<label for="date">
				{@html Today}
			</label>
			<input id="date" class="dial-result" value={month + ' ' + day} readonly />
		</div>
		<div class="row dial-box">
			<div class="dial">
				<button
					on:click={(event) => {
						handleUpClick('hour', +1, hour, event);
					}}>{@html ArrowUpIcon}</button
				>
				<input type="text" bind:value={hour} on:keydown={handleInputKeyDown} />
				<button
					on:click={(event) => {
						handleUpClick('hour', -1, hour, event);
					}}
					type="button">{@html ArrowDownIcon}</button
				>
			</div>
			:
			<div class="dial">
				<button
					on:click={(event) => {
						handleUpClick('minute', +1, minute, event);
					}}>{@html ArrowUpIcon}</button
				>
				<input type="text" bind:value={minute} />
				<button
					on:click={(event) => {
						handleUpClick('minute', -1, minute, event);
					}}>{@html ArrowDownIcon}</button
				>
			</div>
			<div class="dial ml-8">
				<button>{@html ArrowUpIcon}</button>
				<input type="text" value={meridiem} />
				<button>{@html ArrowDownIcon}</button>
			</div>
		</div>
		<div class="row">
			<Button handleClick={handleTrashClick}>
				{@html Trash}
			</Button>
			<Button handleClick={handleSeatedClick} customClass={'bg-orange flex-1'}>Save</Button>
		</div>
	</div>
</div>

<style>
	.bg-overlay {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}
	.modal {
		width: 400px;
		/* height: 400px; */
		padding: 20px;
		background-color: #fff;
		border-radius: 20px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 20px;
	}
	.row {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.ml-8 {
		margin-left: 16px;
	}

	.dial-result {
		flex: 1;
		padding: 20px;
		text-align: start;
		border: #dbd9d7 1px solid;
		border-radius: 8px;
	}
	.dial-result:focus {
		outline: #fa8960 2px solid;
	}
	.dial-box {
		flex: 1;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.dial {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		font-size: 24px;
	}

	.dial input {
		width: 80px;
		height: 100px;
		padding: 20px 8px;
		text-align: center;

		border: none;
	}
	.dial input:focus {
		outline: none;
	}
</style>
