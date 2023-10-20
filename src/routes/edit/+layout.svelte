<script lang="ts">
	import Button from '../../components/common/button.svelte';
	import Header from '../../components/layout/header.svelte';
	import BackIcon from '../../../static/keyboard_backspace.svg?raw';
	let title = window.location.pathname === '/edit' ? 'New Reservation' : 'Edit Reservation';

	let handleClick = () => {
		window.history.back();
	};
</script>

<Header {title}>
	<Button {handleClick}>
		{@html BackIcon}
	</Button>
</Header>
<div class="h-100">
	<slot />
</div>

<style>
	.h-100 {
		height: calc(96vh - 100px);
	}
</style>
