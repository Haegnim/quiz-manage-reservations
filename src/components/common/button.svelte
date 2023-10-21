<script lang="ts">
	// export let buttonContent: string;
	export let type: 'button' | 'submit' = 'button';
	export let customClass: string = '';
	export let handleClick: (event: MouseEvent) => void = () => {};
	export let disabled: boolean = false;
	$: combinedClass = `${customClass} btn`;
</script>

<button on:click={handleClick} class={combinedClass} {type} class:disabled {disabled}>
	<slot />
</button>

<style>
	.btn {
		min-width: 60px;
		min-height: 60px;
		max-height: 65px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 12px;
		padding: 16px 12px;
		box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
		border-radius: 8px;
		background: linear-gradient(180deg, #fefefe 0%, #f8f8f7 57.29%, #f6f6f5 100%);
		font-size: 24px;
	}
	.orange {
		color: #ec551f;
	}
	.bg-gradient-orange {
		color: #fff;
		background: linear-gradient(180deg, #ef7144 0%, #df4c18 70%, #d94714 100%);
		flex: 7;
		justify-content: center;
	}
	.disabled {
		opacity: 0.7;
	}
	.flex-1 {
		flex: 1;
	}
</style>
