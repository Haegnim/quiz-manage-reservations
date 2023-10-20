<script lang="ts">
	import Header from '../components/layout/header.svelte';
	import Link from '../components/common/link.svelte';
	import PlusIcon from '../../static/add.svg?raw';
	import ReservationCard from '../components/reservationCard.svelte';
	import { reservation, addReserve } from '../store/stores.ts';
	let title = 'Reservation';
	let route = '/edit';
	$: data = $reservation.filter((data) => data.seated === false);
</script>

<Header {title}>
	<Link {route} customClass={'text-orange'}>
		{@html PlusIcon}
		new reservation
	</Link>
</Header>
<div class="bg-gray-f5 p-5 h-screen-90 overflow-y-auto scrollbar-hide">
	<ul class="grid grid-cols-3 place-items-center justify-center gap-5">
		{#each data as data, index (index)}
			<ReservationCard {data} />
		{/each}
	</ul>
</div>

<style>
	.h-screen-90 {
		height: calc(100% - 90px);
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
