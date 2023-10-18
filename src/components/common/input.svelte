<script lang="ts">
	// export let buttonContent: string;
	export let name: string = 'example';
	export let value: string = '';
	let isActive: boolean = value ? true : false;
	// let inputElement: HTMLInputElement | undefined;
	function updateIsActive(event: Event) {
		const target = event.target as HTMLInputElement;
		isActive = !!target.value;
	}
</script>

<div class="input-box">
	<label for={`${name}InputField`} class:active={isActive}
		>{name}<span class="essential">*</span></label
	>
	<input
		type="text"
		id={`${name}InputField`}
		bind:value
		on:input={updateIsActive}
		on:focus={() => (isActive = true)}
		on:blur={updateIsActive}
	/>
</div>

<style>
	.input-box {
		position: relative;
		flex: 1;
	}
	.essential {
		color: #ec551f;
		margin-left: 8px;
	}
	label {
		position: absolute;
		top: 50%;
		left: 16px;
		transform: translate(0, -50%);
		color: #ada7a4;
		padding: 8px;
		background-color: #fff;
		border-radius: 20px;
		transition: all 0.3s ease-in-out;
	}
	.active {
		transform: translate(0, -140%);
	}
	input {
		width: 100%;
		padding: 28px 20px;
		border-radius: 8px;
		border: #dbd9d7 1px solid;
	}
	input:focus {
		outline: none;
	}
</style>
