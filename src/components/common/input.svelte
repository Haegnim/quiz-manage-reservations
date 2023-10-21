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

<div class="relative flex-1">
	<label
		for={`${name}InputField`}
		class:active={isActive}
		class="transform -translate-y-[50%] absolute top-1/2 left-4 px-2 py-1 bg-white rounded-full transition-all duration-300 ease-in-out text-gray-w200"
		>{name}<span class="text-orange ml-2">*</span></label
	>
	<input
		type="text"
		id={`${name}InputField`}
		bind:value
		on:input={updateIsActive}
		on:focus={() => (isActive = true)}
		on:blur={blurIsActive}
		class="w-full p-7 border border-gray-w300 rounded-lg focus:outline-none"
	/>
</div>

<style>
	.active {
		transform: translate(0, -160%);
	}
</style>
