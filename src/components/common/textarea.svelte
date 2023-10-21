<script lang="ts">
	export let value: string = '';
	export let blurEvent: () => void = () => {};
</script>

<textarea
	bind:value
	placeholder="Add Note..."
	on:blur={blurEvent}
	class="w-full h-60 p-7 rounded-lg border border-gray-300 focus:outline-none"
/>

<style>
</style>
