<script lang="ts">
	// export let buttonContent: string;
	export let name: string = 'example';
	export let value: string | number = '';
	export let inputEvent: (event: Event) => void = () => {};
	export let blurEvent: () => void = () => {};
	let isActive: boolean = value ? true : false;
	// let inputElement: HTMLInputElement | undefined;
	function updateIsActive(event: Event) {
		const target = event.target as HTMLInputElement;
		isActive = !!target.value;
		inputEvent(event);
	}
	function blurIsActive(event: Event) {
		const target = event.target as HTMLInputElement;
		isActive = !!target.value;
		blurEvent();
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
		on:blur={blurIsActive}
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
		transform: translate(0, -160%);
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
