<script lang="ts">
	import Input from '../../components/common/input.svelte';
	import Textarea from '../../components/common/textarea.svelte';
	import Button from '../../components/common/button.svelte';
	import Selecter from '../../components/common/selecter.svelte';
	import PlusIcon from '../../../static/math-plus.svg?raw';
	import MinusIcon from '../../../static/math-minus.svg?raw';
	import SelectDate from '../../components/selectDate.svelte';
	import { reservation, addReserve } from '../../store/stores.ts';
	import { goto } from '$app/navigation';
	import { v4 as uuidv4 } from 'uuid';

	let type: 'button' | 'submit' = 'submit';

	let nameInputValue: string = '';
	let phoneInputValue: string = '';
	let selectOption: { table: number; floor: number }[] = [];
	let noteTextAreaValue: string = '';
	let count = 0;
	let date: string = '';
	let disabled: boolean = false;
	$: disabled =
		nameInputValue === '' && phoneInputValue === '' && count === 0 && date === '' ? true : false;
	const disabledHandler = () => {
		if (nameInputValue === '' && phoneInputValue === '' && count === 0 && date === '') {
			disabled = true;
		} else {
			disabled = false;
		}
	};

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
	const index = uuidv4();

	const formatPhoneNumber = (event: Event) => {
		const target = event.target as HTMLInputElement;
		let value = target.value.replace(/\D/g, '');
		if (value.length > 11) {
			value = value.slice(0, 11);
		}
		if (value.length > 7) {
			phoneInputValue = value.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
		} else if (value.length > 3) {
			phoneInputValue = value.replace(/(\d{3})(\d+)/, '$1-$2');
		} else {
			phoneInputValue = value;
		}
	};

	let handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		if (nameInputValue === '') {
			return alert('이름을 입력해주세요');
		} else if (phoneInputValue === '') {
			return alert('전화번호를 입력해주세요');
		} else if (count === 0) {
			return alert('인원수를 입력해주세요');
		} else if (date === '') {
			return alert('예약 날짜를 입력해주세요');
		}
		let data = {
			name: nameInputValue,
			phoneNumber: phoneInputValue,
			guests: count,
			selectTable: selectOption,
			memo: noteTextAreaValue,
			date: date,
			id: index,
			seated: false
		};
		addReserve(data);
		await goto('/');
	};
</script>

<form
	action="addReservation"
	on:submit={handleSubmit}
	class="h-full flex flex-col justify-between gap-10 py-5"
>
	<div class="h-fill flex flex-col justify-between gap-12">
		<div class="flex justify-between items-center gap-5 w-full px-5">
			<Input name={'name'} bind:value={nameInputValue} />
			<Input name={'phone'} bind:value={phoneInputValue} inputEvent={formatPhoneNumber} />
			<SelectDate bind:dateData={date} />
			<!-- <Button {handleClick} customClass={mathClass}>Select Date</Button> -->
		</div>

		<div class="flex justify-between items-start gap-5 w-full px-5">
			<div class="flex justify-between items-center gap-5">
				Guests
				<Button handleClick={handleMinusClick} customClass="flex-1">
					{@html MinusIcon}
				</Button>
				<span class="w-4 text-center">
					{count}
				</span>
				<Button handleClick={handlePlusClick} customClass="flex-1">
					{@html PlusIcon}
				</Button>
			</div>
			<Selecter bind:selectOption>Select Table</Selecter>
		</div>
		<div class="flex justify-between items-center gap-5 w-full px-5">
			<Textarea bind:value={noteTextAreaValue} />
		</div>
	</div>

	<div class="flex justify-between items-center gap-5 w-full px-5">
		<Button customClass="bg-gradient-orange flex-1" {type} {disabled}>Save</Button>
	</div>
</form>

<style>
</style>
