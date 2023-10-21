<script lang="ts">
	import Input from '../../../components/common/input.svelte';
	import Textarea from '../../../components/common/textarea.svelte';
	import Button from '../../../components/common/button.svelte';
	import Selecter from '../../../components/common/selecter.svelte';
	import SelectDate from '../../../components/selectDate.svelte';
	import Count from '../../../components/count.svelte';
	import Trash from '../../../../static/trash.svg?raw';
	import {
		deleteReserve,
		reservation,
		updateReserve,
		updateSeated
	} from '../../../store/stores.ts';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { formatPhoneNumber, validateInput } from '../../../utils/validate.ts';

	let id = $page.params.id;
	let data = $reservation.find((reserve) => reserve.id === id);

	let nameInputValue: string = data ? data.name : '';
	let phoneInputValue: string = data ? data.phoneNumber : '';
	let selectOption: { table: number; floor: number }[] = data ? data.selectTable : [];
	let noteTextAreaValue: string | undefined = data ? data.memo : '';
	let count = data ? data.guests : 0;
	let date = data ? data.date : '';

	const handleTrashClick = async (event: MouseEvent, id: string) => {
		event.preventDefault();
		deleteReserve(id);
		await goto('/');
	};

	const handleSeatedClick = async (event: MouseEvent, id: string) => {
		event.preventDefault();
		updateSeated(id);
		await goto('/');
	};

	const onPhoneInputChange = (event: Event) => (phoneInputValue = formatPhoneNumber(event));

	const handleSubmit = async () => {
		const isValid = validateInput(nameInputValue, phoneInputValue, count, date);
		if (!isValid) return;

		if (data) {
			let update = {
				name: nameInputValue,
				phoneNumber: phoneInputValue,
				guests: count,
				selectTable: selectOption,
				memo: noteTextAreaValue,
				date,
				id,
				seated: data?.seated
			};
			updateReserve(data.id, update);
			console.log(data);
		}
	};
</script>

<form
	action="addReservation"
	on:submit={handleSubmit}
	class="h-full flex flex-col justify-between gap-10 py-5"
>
	<div class="h-fill flex flex-col justify-between gap-12">
		<div class="flex justify-between items-center gap-5 w-full px-5">
			<Input name={'name'} bind:value={nameInputValue} blurEvent={handleSubmit} />
			<Input
				name={'phone'}
				bind:value={phoneInputValue}
				inputEvent={onPhoneInputChange}
				blurEvent={handleSubmit}
			/>
			<SelectDate bind:dateData={date} submitEvent={handleSubmit} />
		</div>

		<div class="flex justify-between items-start gap-5 w-full px-5">
			<Count bind:count eventHandler={handleSubmit} />
			<Selecter bind:selectOption submitEvent={handleSubmit}>Select Table</Selecter>
		</div>
		<div class="flex justify-between items-center gap-5 w-full px-5">
			<Textarea bind:value={noteTextAreaValue} blurEvent={handleSubmit} />
		</div>
	</div>

	<div class="flex justify-between items-center gap-5 w-full px-5">
		<Button handleClick={(event) => handleTrashClick(event, id)}>
			{@html Trash}
		</Button>

		<Button
			handleClick={(event) => handleSeatedClick(event, id)}
			customClass={'flex-1 bg-gradient-orange'}>Seated</Button
		>
	</div>
</form>

<style>
</style>
