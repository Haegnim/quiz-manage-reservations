<script lang="ts">
	import Input from '../../../components/common/input.svelte';
	import Textarea from '../../../components/common/textarea.svelte';
	import Button from '../../../components/common/button.svelte';
	import Selecter from '../../../components/common/selecter.svelte';
	import PlusIcon from '../../../../static/math-plus.svg?raw';
	import MinusIcon from '../../../../static/math-minus.svg?raw';
	import SelectDate from '../../../components/selectDate.svelte';
	import { reservation, updateReserve } from '../../../store/stores.ts';
	import { page } from '$app/stores';

	let id = $page.params.id;
	let data = $reservation.find((reserve) => reserve.id === id);

	let handleClick = () => {};
	let type: 'button' | 'submit' = 'submit';
	let mathClass = 'flex-1';
	let customClass = 'flex-1 bg-orange';

	let nameInputValue: string = data ? data.name : '';
	let phoneInputValue: string = data ? data.phoneNumber : '';
	let selectOption: { table: number; floor: number }[] = data ? data.selectTable : [];
	let noteTextAreaValue: string | undefined = data ? data.memo : '';
	let count = data ? data.guests : 0;
	const MIN_GUESTS = 0;
	const MAX_GUESTS = 8;
	let handlePlusClick = () => {
		if (MAX_GUESTS > count) {
			count += 1;
		}
	};
	let handleMinusClick = () => {
		if (MIN_GUESTS < count) {
			count -= 1;
		}
	};

	let handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
		let update = {
			name: nameInputValue,
			phoneNumber: phoneInputValue,
			guests: count,
			selectTable: selectOption,
			memo: noteTextAreaValue,
			date: '2015-02-29',
			id: '1'
		};
		if (data) {
			updateReserve(data.id, update);
			window.history.back();
		}
	};
</script>

<form action="addReservation" on:submit={handleSubmit}>
	<div class="row w-100 mb-70">
		<Input name={'name'} bind:value={nameInputValue} />
		<Input name={'phone'} bind:value={phoneInputValue} />
		<SelectDate />
		<!-- <Button {handleClick} customClass={mathClass}>Select Date</Button> -->
	</div>

	<div class="row w-100 mb-70">
		<div class="row">
			Guests
			<Button handleClick={handleMinusClick} customClass={mathClass}>
				{@html MinusIcon}
			</Button>
			<span class="count">
				{count}
			</span>
			<Button handleClick={handlePlusClick} customClass={mathClass}>
				{@html PlusIcon}
			</Button>
		</div>
		<Selecter bind:selectOption>Select Table</Selecter>
	</div>
	<div class="row w-100 mb-70">
		<Textarea bind:value={noteTextAreaValue} />
	</div>

	<div class="row w-100 mb-70">
		<Button {handleClick} {customClass} {type}>Save</Button>
	</div>
</form>

<style>
	.w-100 {
		width: 100%;
	}
	.row {
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}
	.mb-70 {
		margin-bottom: 70px;
	}
	.count {
		width: 15px;
		text-align: center;
	}
</style>
