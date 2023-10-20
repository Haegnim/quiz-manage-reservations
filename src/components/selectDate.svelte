<script lang="ts">
	import Button from './common/button.svelte';
	import DateCheckIcon from '../../static/event_available.svg?raw';
	import Alarm from '../../static/alarm_on.svg?raw';
	import Today from '../../static/today.svg?raw';
	import Trash from '../../static/trash.svg?raw';
	import ArrowDownIcon from '../../static/chevron-down.svg?raw';
	import ArrowUpIcon from '../../static/chevron-up.svg?raw';
	export let dateData: string = '';
	let isShow = false;
	let isdial = 'time';
	let handleShowClick = (event: MouseEvent) => {
		isShow = !isShow;
	};
	let handleDialClick = (event: MouseEvent, type: string) => {
		isdial = type;
	};

	const handleTrashClick = (event: MouseEvent) => {
		event.preventDefault();
		isShow = !isShow;
	};

	let hour: string = '00';
	let minute: string = '00';
	let meridiem: string = 'AM';
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
	let month: string = monthName(0);
	let day: string = '10';
	let today = new Date();
	let todayDate = today.getDate();
	let todayMonth = today.getMonth();
	if (dateData !== '') {
		console.log(dateData);
		let date = dateData.split(',');
		if (date[0] === 'today') {
			month = monthName(todayMonth);
			day = todayDate.toString();
		} else {
			month = date[0].split(' ')[0];
			day = date[0].split(' ')[1];
		}
		hour = date[1].split(':')[0];
		minute = date[1].split(':')[1].split(' ')[0];
		meridiem = date[1].split(':')[1].split(' ')[1];
	}
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

	const meridiemCount = (event: MouseEvent) => {
		event.preventDefault();
		meridiem = meridiem === 'AM' ? 'PM' : 'AM';
	};

	const handleTimeCountClick = (type: string, count: number, props: string, event: MouseEvent) => {
		event.preventDefault();
		console.log('handleUpClick');
		if (type === 'hour') {
			hourCount(props, count);
		} else if (type === 'minute') {
			minuteCount(props, count);
		}
	};

	const monthCount = (props: string, count: number) => {
		const crrentMonth = MONTH.indexOf(props);

		let num: number = crrentMonth + count;
		if (num < 0) {
			num = 11;
		} else if (num > 11) {
			num = 0;
		}
		console.log(props);
		console.log(crrentMonth);
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

	const handleSaveClick = (event: MouseEvent) => {
		event.preventDefault();
		isShow = !isShow;
		if (month === monthName(todayMonth) && day === todayDate.toString()) {
			dateData = `today, ${hour}:${minute} ${meridiem}`;
		} else {
			dateData = `${month + ' ' + day}, ${hour}:${minute} ${meridiem}`;
		}
	};
</script>

<Button handleClick={handleShowClick} customClass={'flex-1'}>
	{@html DateCheckIcon}
	{#if dateData === ''}
		Select Date
	{:else}
		{dateData}
	{/if}
</Button>
{#if isShow}
	<div class="bg-overlay">
		<div class="modal">
			<div class="input-box row">
				<label for="time">
					{@html Alarm}
				</label>
				<input
					id="time"
					class="dial-result"
					value={hour + ':' + minute + ' ' + meridiem}
					on:click={(event) => handleDialClick(event, 'time')}
					readonly
				/>
			</div>
			<div class="input-box row">
				<label for="date">
					{@html Today}
				</label>
				<input
					id="date"
					class="dial-result"
					value={month + ' ' + day}
					on:click={(event) => handleDialClick(event, 'date')}
					readonly
				/>
			</div>
			{#if isdial === 'time'}
				<div class="row dial-box">
					<div class="dial">
						<button
							on:click={(event) => {
								handleTimeCountClick('hour', +1, hour, event);
							}}>{@html ArrowUpIcon}</button
						>
						<input type="text" bind:value={hour} />
						<button
							on:click={(event) => {
								handleTimeCountClick('hour', -1, hour, event);
							}}
							type="button">{@html ArrowDownIcon}</button
						>
					</div>
					:
					<div class="dial">
						<button
							on:click={(event) => {
								handleTimeCountClick('minute', +1, minute, event);
							}}>{@html ArrowUpIcon}</button
						>
						<input type="text" bind:value={minute} />
						<button
							on:click={(event) => {
								handleTimeCountClick('minute', -1, minute, event);
							}}>{@html ArrowDownIcon}</button
						>
					</div>
					<div class="dial ml-8">
						<button on:click={(event) => meridiemCount(event)}>{@html ArrowUpIcon}</button>
						<input type="text" value={meridiem} />
						<button on:click={(event) => meridiemCount(event)}>{@html ArrowDownIcon}</button>
					</div>
				</div>
			{:else}
				<div class="row dial-box">
					<div class="dial">
						<button
							on:click={(event) => {
								handleDateCountClick('month', +1, month, event);
							}}>{@html ArrowUpIcon}</button
						>
						<input type="text" bind:value={month} />
						<button
							on:click={(event) => {
								handleDateCountClick('month', -1, month, event);
							}}
							type="button">{@html ArrowDownIcon}</button
						>
					</div>
					<div class="dial">
						<button
							on:click={(event) => {
								handleDateCountClick('day', +1, day, event);
							}}>{@html ArrowUpIcon}</button
						>
						<input type="text" bind:value={day} />
						<button
							on:click={(event) => {
								handleDateCountClick('day', -1, day, event);
							}}>{@html ArrowDownIcon}</button
						>
					</div>
				</div>
			{/if}
			<div class="row">
				<Button handleClick={handleTrashClick}>
					{@html Trash}
				</Button>
				<Button handleClick={handleSaveClick} customClass={'bg-orange flex-1'}>Save</Button>
			</div>
		</div>
	</div>
{/if}

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
