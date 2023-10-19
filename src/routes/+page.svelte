<script lang="ts">
	import Header from '../components/layout/header.svelte';
	import Link from '../components/common/link.svelte';
	import PlusIcon from '../../static/add.svg?raw';
	import ReservationCard from '../components/reservationCard.svelte';
	import { reservation, addReserve } from '../store/stores.ts';
	let title = 'Reservation';
	let route = '/edit';
	let customClass = 'orange';
	$: data = $reservation.filter((data) => data.seated === false);
</script>

<Header {title}>
	<Link {route} {customClass}>
		{@html PlusIcon}
		new reservation
	</Link>
</Header>
<div class="reservation-container">
	<ul>
		{#each data as data, index (index)}
			<ReservationCard {data} />
		{/each}
	</ul>
</div>

<style>
	.reservation-container {
		background-color: #f5f5f4;
		padding: 20px;
		height: calc(100% - 90px);
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
