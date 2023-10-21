<script>
	import '../styles.css';
</script>

<div class="w-full h-screen flex items-center justify-center bg-gray-666">
	<div class="w-4/5 min-w h-[96vh] bg-white rounded-xl overflow-hidden">
		<slot />
	</div>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	:global(body) {
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
	}
	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(img) {
		max-width: 100%;
		height: auto;
	}

	:global(ul, ol) {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	:global(button, input, textarea, select) {
		font-family: inherit;
		font-size: 100%;
		margin: 0;
		resize: none;
	}

	:global(button) {
		background: none;
		border: none;
	}
	.min-w {
		min-width: 1200px;
	}
</style>
