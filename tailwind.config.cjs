/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: {
					f5: '#f5f5f4',
					w200: '#ada7a4',
					w300: '#dbd9d7',
					666: '#666'
				},
				orange: '#ec551f'
			}
		}
	},
	plugins: []
};
