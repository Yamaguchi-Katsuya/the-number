import { useState } from 'react';
import { isPrime } from '../utils/number';
import { isValidNumber, setValidNumberError } from '../utils/validation';
import NumberBox from '../ui/NumberBox';
import NumberForm, { Field } from '../ui/NumberForm';
import NumberDescription from '../ui/NumberDescription';

export default function PrimeNumber(): JSX.Element {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const fields: Field[] = [
    { name: 'prime-number' },
  ];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const primeNumber = form['prime-number'].value;
    if (!isValidNumber(primeNumber)) {
      setResult('');
      setValidNumberError(setError);
      return;
    }

    setError('');
    isPrime(Number(primeNumber))
      ? setResult(`${primeNumber}は素数です`)
      : setResult(`${primeNumber}は素数ではありません`);
  }

  return (
    <>
      <NumberBox title="素数" result={result} error={error}>

        <NumberDescription text="数値が素数かどうか判定します" keyword="素数" />

        <NumberForm handleSubmit={handleSubmit} fields={fields} />

      </NumberBox>
    </>
  );
}
