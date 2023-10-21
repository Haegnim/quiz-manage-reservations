<script lang="ts">
	import Button from './common/button.svelte';
	import Trash from '../../static/trash.svg?raw';
	import Phone from '../../static/phone.svg?raw';
	import Event from '../../static/event_available.svg?raw';
	import Group from '../../static/group.svg?raw';
	import Edit from '../../static/edit.svg?raw';
	import { deleteReserve, updateSeated, type ReservationCardProps } from '../store/stores.ts';
	export let data: ReservationCardProps;
	let table: number[] = [];
	data && data.selectTable.map((item) => table.push(item.table));

	const handleTrashClick = (event: MouseEvent, id: string) => {
		event.preventDefault();
		deleteReserve(id);
	};

	const handleSeatedClick = (event: MouseEvent, id: string) => {
		event.preventDefault();
		updateSeated(id);
	};
</script>

<li class="w-full">
	<a href={`/edit/${data.id}`} class="card-box">
		<div class="info-box">
			<div class="flex items-center mb-6 gap-4">
				<p>{data.name}</p>
				<span class="phone">{@html Phone} {data.phoneNumber}</span>
			</div>
			<div class="flex items-center mb-6">
				{@html Event}
				<p class="ml-2">{data.date}</p>
			</div>
			<div class="flex items-center mb-6">
				{@html Group}
				<p class="ml-2">{data.guests}</p>
			</div>

			{#if data.selectTable.length !== 0}
				<p class="text-gray-w400 text-sm mb-6">
					Reserved Table <span class="text-black text-xl">{table.join(', ')}</span> · Floor 1
				</p>
				<p class="flex items-center mb-6 gap-x-2">{data.memo} {@html Edit}</p>
			{:else}
				<p class="no-select">No Selected Table</p>
			{/if}
		</div>
		<div class="flex items-center gap-x-2 mt-auto">
			<Button handleClick={(event) => handleTrashClick(event, data.id)}>
				{@html Trash}
			</Button>

			<Button
				handleClick={(event) => handleSeatedClick(event, data.id)}
				customClass={'bg-gradient-orange'}>Seated</Button
			>
		</div>
	</a>
</li>

<style>
	li {
		width: 100%;
	}
	.card-box {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20px;
		height: 400px;
		background-color: #fff;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
		border-radius: 8px;
		font-size: 20px;
		line-height: 20px;
	}
	.no-select {
		font-style: italic;
		color: #999;
	}
	.phone {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
		padding: 12px 16px;
		box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
		border-radius: 50px;
		background: linear-gradient(180deg, #fefefe 0%, #f8f8f7 57.29%, #f6f6f5 100%);
		color: #78716c;
	}
</style>
