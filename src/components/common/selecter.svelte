<script lang="ts">
	import SelectIcon from '../../../static/arrow_drop_down.svg?raw';
	export let selectOption: { table: number; floor: number }[] = [];
	export let submitEvent: () => void = () => {};

	let isActive: boolean | undefined = false;
	let isList: boolean = selectOption ? true : false;
	let optionList = [
		{ table: 1, floor: 1 },
		{ table: 2, floor: 1 },
		{ table: 3, floor: 1 },
		{ table: 4, floor: 1 }
	];

	function updateIsActive(event: MouseEvent) {
		event.preventDefault();
		isActive = !isActive;
	}

	function handleClickAdd(index: number, event: MouseEvent) {
		event.preventDefault();
		const isOption = selectOption.find((option) => option === optionList[index]);
		if (!isOption) {
			selectOption = [...selectOption, optionList[index]];
		}
		submitEvent();
	}

	function handleClickRemove(index: number, event: MouseEvent) {
		event.preventDefault();
		selectOption = selectOption.filter((option) => option !== selectOption[index]);
		submitEvent();
	}
</script>

<div class="w-1/2 relative">
	<button on:click={updateIsActive} class="selector" class:active={isActive}>
		<span class:active={isList} class="select-name">
			<slot />
		</span>
		<ul class="selected-list" class:active={isList}>
			{#each selectOption as item, index (index)}
				<li class="selected-item">
					<button on:click|stopPropagation={(event) => handleClickRemove(index, event)}>
						<p>
							Table {item.table} Floor {item.floor}
						</p>
						<span class="close-icon">
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="close">
									<path
										id="close_2"
										d="M8.30056 6.41482C7.77986 5.89412 6.93564 5.89412 6.41494 6.41482C5.89424 6.93552 5.89424 7.77974 6.41494 8.30043L14.1146 16.0001L6.41502 23.6996C5.89432 24.2203 5.89432 25.0646 6.41502 25.5853C6.93572 26.106 7.77994 26.106 8.30064 25.5853L16.0002 17.8857L23.6998 25.5853C24.2205 26.106 25.0647 26.106 25.5854 25.5853C26.1061 25.0646 26.1061 24.2203 25.5854 23.6996L17.8858 16.0001L25.5855 8.30043C26.1062 7.77974 26.1062 6.93552 25.5855 6.41482C25.0648 5.89412 24.2206 5.89412 23.6999 6.41482L16.0002 14.1145L8.30056 6.41482Z"
									/>
								</g>
							</svg>
						</span>
					</button>
				</li>
			{/each}
		</ul>
		<span class="select-icon" class:active={isActive}>
			{@html SelectIcon}
		</span>
	</button>
	<ul class="select-list" class:active={isActive}>
		{#each optionList as item, index (index)}
			<li class="select-item">
				<button on:click={(event) => handleClickAdd(index, event)}>
					Table {item.table} Floor {item.floor}
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	.select-box {
		width: 55%;
		position: relative;
	}
	.select-name {
		padding: 4px 8px;
		background-color: #fff;
		border-radius: 20px;
		transition: all 0.3s ease-in-out;
		position: absolute;
		top: 50%;
		left: 20px;
		transform: translate(0, -50%);
	}
	.select-name.active {
		top: -10px;
		transform: translate(0, 0);
	}
	.select-icon {
		position: absolute;
		top: 50%;
		right: 36px;
		transform: translate(0, -45%);
		transition: all 0.3s ease-in-out;
	}
	.select-icon.active {
		transform: rotate(180deg) translate(0, 22px);
	}
	.selector {
		width: 100%;
		min-height: 82px;
		padding: 20px 36px 20px 26px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		border-radius: 8px;
		border: #dbd9d7 1px solid;
		color: #ada7a4;
		transition: all 0.3s ease-in-out;
	}
	.selector.active {
		border-radius: 8px 8px 0px 0px;
	}
	.select-list {
		width: 100%;
		background-color: #fff;
		position: absolute;
		padding: 16px;
		border: #dbd9d7 1px solid;
		border-top: none;
		border-radius: 0px 0px 8px 8px;
		display: none;
		transition: all 0.3s ease-in-out;
	}
	.select-list.active {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		align-items: flex-start;
	}
	.select-item {
		padding: 8px 20px;
		border: #dbd9d7 1px solid;
		border-radius: 30px;
		display: inline-block;
	}
	.selected-list {
		width: 90%;
		display: none;
	}
	.selected-list.active {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		align-items: flex-start;
	}
	.selected-item {
		background-color: #f5f5f4;
		padding: 8px 20px;
		border-radius: 30px;
		display: inline-block;
	}
	.selected-item button {
		display: flex;
		gap: 8px;
	}
	.close-icon {
		background-color: #d6d3d1;
		padding: 1px;
		width: 20px;
		height: 20px;
		border-radius: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.close-icon > svg {
		width: 16px;
		height: 16px;
		fill: #fff;
	}
</style>
