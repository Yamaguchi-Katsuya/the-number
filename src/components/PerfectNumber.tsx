import { useState } from 'react';
import { isPerfectNumber } from '../utils/number';
import { isValidNumber, setValidNumberError } from '../utils/validation';
import NumberBox from '../ui/NumberBox';
import NumberDescription from '../ui/NumberDescription';
import NumberForm, { Field } from '../ui/NumberForm';

export default function PerfectNumber(): JSX.Element {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const fields: Field[] = [{ name: 'perfect-number' }];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const perfectNumber = form['perfect-number'].value;
    if (!isValidNumber(perfectNumber)) {
      setValidNumberError(setError);
      return;
    }

    isPerfectNumber(Number(perfectNumber))
      ? setResult(`${perfectNumber}は完全数です`)
      : setResult(`${perfectNumber}は完全数ではありません`);
  }

  return (
    <>
      <NumberBox title="完全数" result={result} error={error}>
        <NumberDescription
          text="数値が完全数かどうか判定します"
          keyword="完全数"
        />

        <NumberForm handleSubmit={handleSubmit} fields={fields} />
      </NumberBox>
    </>
  );
}
