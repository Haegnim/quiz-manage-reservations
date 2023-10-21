<script lang="ts">
	import Input from '../../components/common/input.svelte';
	import Textarea from '../../components/common/textarea.svelte';
	import Button from '../../components/common/button.svelte';
	import Selecter from '../../components/common/selecter.svelte';
	import SelectDate from '../../components/selectDate.svelte';
	import Count from '../../components/count.svelte';
	import { addReserve } from '../../store/stores.ts';
	import { goto } from '$app/navigation';
	import { v4 as uuidv4 } from 'uuid';
	import { formatPhoneNumber, validateInput } from '../../utils/validate.ts';

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

	const index = uuidv4();

	const onPhoneInputChange = (event: Event) => (phoneInputValue = formatPhoneNumber(event));

	let handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		const isValid = validateInput(nameInputValue, phoneInputValue, count, date);
		if (!isValid) return;
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
			<Input name={'phone'} bind:value={phoneInputValue} inputEvent={onPhoneInputChange} />
			<SelectDate bind:dateData={date} />
		</div>

		<div class="flex justify-between items-start gap-5 w-full px-5">
			<Count bind:count />
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
