export const isValidNumber = (number: string): boolean => {
  return (
    number !== '' && Number(number) >= 0 && Number.isInteger(Number(number))
  );
};

export const setValidNumberError = (
  setError: (error: string) => void
): void => {
  setError('0以上の自然数を入力してください。');
};
