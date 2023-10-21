<script lang="ts">
	import Button from './common/button.svelte';
	import DateCheckIcon from '../../static/event_available.svg?raw';
	import Alarm from '../../static/alarm_on.svg?raw';
	import Today from '../../static/today.svg?raw';
	import Trash from '../../static/trash.svg?raw';
	import TimeDial from './timeDial.svelte';
	import DateDial from './dateDial.svelte';

	export let dateData: string = '';
	export let submitEvent: () => void = () => {};
	let isShow = false;
	let isdial = 'time';

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

	let handleShowClick = (event: MouseEvent) => {
		event.preventDefault();
		isShow = !isShow;
	};
	let handleDialClick = (event: MouseEvent, type: string) => {
		event.preventDefault();
		isdial = type;
	};

	const handleTrashClick = (event: MouseEvent) => {
		event.preventDefault();
		isShow = !isShow;
	};

	const handleSaveClick = (event: MouseEvent) => {
		event.preventDefault();
		isShow = !isShow;
		if (month === monthName(todayMonth) && day === todayDate.toString()) {
			dateData = `today, ${hour}:${minute} ${meridiem}`;
		} else {
			dateData = `${month + ' ' + day}, ${hour}:${minute} ${meridiem}`;
		}
		submitEvent();
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
				<TimeDial bind:hour bind:minute bind:meridiem />
			{:else}
				<DateDial bind:month bind:day />
			{/if}
			<div class="row">
				<Button handleClick={handleTrashClick}>
					{@html Trash}
				</Button>
				<Button handleClick={handleSaveClick} customClass={'bg-gradient-orange flex-1'}>Save</Button
				>
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
</style>
