import { writable } from 'svelte/store';

export interface ReservationCardProps {
	name: string;
	phoneNumber: string;
	guests: number;
	selectTable?: Array<number>;
	memo?: string;
	date: string;
	params: string;
}
const initialReservations: ReservationCardProps[] = [
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
];
const reservation = writable<ReservationCardProps[]>(initialReservations);

const addReserve = (newItem: ReservationCardProps) => {
	reservation.update((reserve) => [...reserve, newItem]);
};

export { reservation, addReserve };
