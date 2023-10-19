import { writable } from 'svelte/store';

export interface ReservationCardProps {
	name: string;
	phoneNumber: string;
	guests: number;
	selectTable?: { table: number; floor: number }[];
	memo?: string;
	date: string;
	id: string;
}
const initialReservations: ReservationCardProps[] = [
	{
		name: '가나다',
		phoneNumber: '021-523-4521',
		guests: 3,
		selectTable: [{ table: 1, floor: 1 }],
		memo: 'Birthday',
		date: '2015-02-29',
		id: '1'
	},
	{
		name: '가나다',
		phoneNumber: '021-523-4521',
		guests: 3,
		selectTable: [{ table: 1, floor: 1 }],
		memo: 'Birthday',
		date: '2015-02-29',
		id: '2'
	}
];
const reservation = writable<ReservationCardProps[]>(initialReservations);

const addReserve = (newItem: ReservationCardProps) => {
	reservation.update((reserve) => [...reserve, newItem]);
};

const deleteReserve = (id: string) => {
	reservation.update((reserves) => reserves.filter((reserve) => reserve.id !== id));
};

const updateReserve = (id: string, update: ReservationCardProps) => {
	reservation.update((reserves) => {
		const updatedReserves = reserves.map((reserve) => {
			if (reserve.id === id) {
				return { ...reserve, ...update };
			}
			return reserve;
		});

		return updatedReserves;
	});
};

export { reservation, addReserve, deleteReserve, updateReserve };
