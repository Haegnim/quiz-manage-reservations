import { writable } from 'svelte/store';

export const reservation = writable([
	{
		name: '가나다',
		phoneNumber: '021-523-4521',
		guests: 3,
		selectTable: [7, 8],
		memo: 'Birthday',
		date: '2015-02-29',
		params: '1'
	},
	{
		name: '가나다',
		phoneNumber: '021-523-4521',
		guests: 3,
		selectTable: [7, 8],
		memo: 'Birthday',
		date: '2015-02-29',
		params: '1'
	}
]);
