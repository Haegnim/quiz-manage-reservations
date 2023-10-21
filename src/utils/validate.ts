export const formatPhoneNumber = (event: Event) => {
	const target = event.target as HTMLInputElement;
	const DIVIDE_FIRST_PHONE_NUM = 3;
	const DIVIDE_SECOND_PHONE_NUM = 7;
	const MAX_PHONE_NUM = 11;

	let value = target.value.replace(/\D/g, '');
	if (value.length > MAX_PHONE_NUM) {
		value = value.slice(0, MAX_PHONE_NUM);
	}
	if (value.length > DIVIDE_SECOND_PHONE_NUM) {
		return value.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
	} else if (value.length > DIVIDE_FIRST_PHONE_NUM) {
		return value.replace(/(\d{3})(\d+)/, '$1-$2');
	} else {
		return value;
	}
};

export const validateInput = (
	nameInputValue: string,
	phoneInputValue: string,
	count: number,
	date: string
) => {
	if (nameInputValue === '') {
		alert('이름을 입력해주세요');
		return false;
	}
	if (phoneInputValue === '') {
		alert('전화번호를 입력해주세요');
		return false;
	}
	if (count === 0) {
		alert('인원수를 입력해주세요');
		return false;
	}
	if (date === '') {
		alert('예약 날짜를 입력해주세요');
		return false;
	}
	return true;
};
