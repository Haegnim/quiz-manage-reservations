const MIN_GUESTS = 0;
const MAX_GUESTS = 8;

export const countPlus = (count: number, eventHandler?: Function) => {
	if (MAX_GUESTS > count) {
		count += 1;
	}
	eventHandler && eventHandler();

	return count;
};

export const countMinus = (count: number, eventHandler?: Function) => {
	if (MIN_GUESTS < count) {
		count -= 1;
	}
	eventHandler && eventHandler();
	return count;
};
