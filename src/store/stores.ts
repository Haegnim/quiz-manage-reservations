import { writable } from 'svelte/store';

export interface ReservationCardProps {
	name: string;
	phoneNumber: string;
	guests: number;
	selectTable: { table: number; floor: number }[];
	memo?: string;
	date: string;
	id: string;
	seated: boolean;
}
const initialReservations: ReservationCardProps[] = [
	{
		name: '가나다',
		phoneNumber: '021-523-4521',
		guests: 3,
		selectTable: [
			{ table: 9, floor: 1 },
			{ table: 5, floor: 1 }
		],
		memo: 'Birthday',
		date: '2015-02-29',
		id: '1',
		seated: false
	},
	{
		name: '가나다',
		phoneNumber: '021-523-4521',
		guests: 3,
		selectTable: [{ table: 2, floor: 1 }],
		memo: 'Birthday',
		date: '2015-02-29',
		id: '2',
		seated: false
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

const updateSeated = (id: string) => {
	console.log('어라');
	reservation.update((reserves) =>
		reserves.map((reserve) =>
			reserve.id === id ? { ...reserve, seated: !reserve.seated } : reserve
		)
	);
};
export { reservation, addReserve, deleteReserve, updateReserve, updateSeated };
