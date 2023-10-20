<script lang="ts">
	import Input from '../../../components/common/input.svelte';
	import Textarea from '../../../components/common/textarea.svelte';
	import Button from '../../../components/common/button.svelte';
	import Selecter from '../../../components/common/selecter.svelte';
	import PlusIcon from '../../../../static/math-plus.svg?raw';
	import MinusIcon from '../../../../static/math-minus.svg?raw';
	import SelectDate from '../../../components/selectDate.svelte';
	import Trash from '../../../../static/trash.svg?raw';
	import {
		deleteReserve,
		reservation,
		updateReserve,
		updateSeated
	} from '../../../store/stores.ts';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let id = $page.params.id;
	let data = $reservation.find((reserve) => reserve.id === id);

	let nameInputValue: string = data ? data.name : '';
	let phoneInputValue: string = data ? data.phoneNumber : '';
	let selectOption: { table: number; floor: number }[] = data ? data.selectTable : [];
	let noteTextAreaValue: string | undefined = data ? data.memo : '';
	let count = data ? data.guests : 0;
	let date = data ? data.date : '';
	const MIN_GUESTS = 0;
	const MAX_GUESTS = 8;

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
	let handleSubmit = async () => {
		if (nameInputValue === '') {
			return alert('이름을 입력해주세요');
		} else if (phoneInputValue === '') {
			return alert('전화번호를 입력해주세요');
		} else if (count === 0) {
			return alert('인원수를 입력해주세요');
		} else if (date === '') {
			return alert('예약 날짜를 입력해주세요');
		}
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
		}
	};
	let handlePlusClick = () => {
		if (MAX_GUESTS > count) {
			count += 1;
		}
		handleSubmit();
	};
	let handleMinusClick = () => {
		if (MIN_GUESTS < count) {
			count -= 1;
		}
		handleSubmit();
	};
</script>

<form action="addReservation" on:submit={handleSubmit}>
	<div class="row w-100 mb-70">
		<Input name={'name'} bind:value={nameInputValue} blurEvent={handleSubmit} />
		<Input
			name={'phone'}
			bind:value={phoneInputValue}
			inputEvent={formatPhoneNumber}
			blurEvent={handleSubmit}
		/>
		<SelectDate bind:dateData={date} />
	</div>

	<div class="row w-100 mb-70 relative">
		<div class="row">
			Guests
			<Button handleClick={handleMinusClick} customClass={'flex-1'}>
				{@html MinusIcon}
			</Button>
			<span class="count">
				{count}
			</span>
			<Button handleClick={handlePlusClick} customClass={'flex-1'}>
				{@html PlusIcon}
			</Button>
		</div>
		<Selecter bind:selectOption submitEvent={handleSubmit}>Select Table</Selecter>
	</div>
	<div class="row w-100 mb-70">
		<Textarea bind:value={noteTextAreaValue} blurEvent={handleSubmit} />
	</div>

	<div class="row w-100 mb-70">
		<Button handleClick={(event) => handleTrashClick(event, id)}>
			{@html Trash}
		</Button>

		<Button handleClick={(event) => handleSeatedClick(event, id)} customClass={'flex-1 bg-orange'}
			>Seated</Button
		>
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
	.relative {
		position: relative;
	}
</style>
