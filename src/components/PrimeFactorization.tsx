import { useState } from 'react';
import { primeFactorization } from '../utils/number';
import { isValidNumber, setValidNumberError } from '../utils/validation';
import NumberBox from '../ui/NumberBox';
import NumberDescription from '../ui/NumberDescription';
import NumberForm, { Field } from '../ui/NumberForm';

export default function PrimeFactorization(): JSX.Element {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const fields: Field[] = [
    { name: 'factorization-number' },
  ];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const factorizationNumber = form['factorization-number'].value;
    if (!isValidNumber(factorizationNumber)) {
      setValidNumberError(setError);
      return;
    }

    setResult(
      `${factorizationNumber} = ${primeFactorization(Number(factorizationNumber))}`
    );
  }

  return (
    <>
      <NumberBox title="素因数分解" result={result} error={error}>

        <NumberDescription text="数値を素因数分解します" keyword="素因数分解" />

        <NumberForm handleSubmit={handleSubmit} fields={fields} />

      </NumberBox>
    </>
  );
}
