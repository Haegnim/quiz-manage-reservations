<script lang="ts">
	export let value: string = '';
	export let blurEvent: () => void = () => {};
</script>

<textarea bind:value placeholder="Add Note..." on:blur={blurEvent} />

<style>
	textarea {
		width: 100%;
		height: 260px;
		padding: 28px 20px;
		border-radius: 8px;
		border: #dbd9d7 1px solid;
	}
	textarea:focus {
		outline: none;
	}
</style>
