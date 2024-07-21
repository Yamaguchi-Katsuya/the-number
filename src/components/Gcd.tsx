import { useState } from 'react';
import { gcd } from '../utils/number';
import { isValidNumber, setValidNumberError } from '../utils/validation';
import NumberForm, { Field } from '../ui/NumberForm';
import NumberBox from '../ui/NumberBox';
import NumberDescription from '../ui/NumberDescription';

export default function Gcd(): JSX.Element {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const fields: Field[] = [
    { name: 'gcd1' },
    { name: 'gcd2' },
  ];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const number1 = form['gcd1'].value;
    const number2 = form['gcd2'].value;
    if (!isValidNumber(number1) || !isValidNumber(number2)) {
      setValidNumberError(setError);
      return;
    }

    setResult(
      `最大公約数は${String(gcd(Number(number1), Number(number2)))}です`
    );
  }

  return (
    <>
      <NumberBox title="最大公約数" result={result} error={error}>

        <NumberDescription text="2つの数値の最大公約数を求めます" keyword="最大公約数" />

        <NumberForm handleSubmit={handleSubmit} fields={fields} />

      </NumberBox>

    </>
  );
}
