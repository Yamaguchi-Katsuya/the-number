import { ReactNode } from 'react';
import ErrorText from './ErrorText';
import ResultText from './ResultText';

interface NumberBoxProps {
  title: string;
  result: string;
  error: string;
  children: ReactNode;
}

export default function NumberBox({
  title,
  result,
  error,
  children,
}: NumberBoxProps): JSX.Element {
  return (
    <>
      <section className="text-center font-kiwi flex flex-col space-y-5 md:space-y-12 py-8 border border-solid border-black w-full bg-white md:text-3xl">
        <h2 className="text-2xl md:text-5xl">{title}</h2>

        {children}

        <ResultText result={result} />

        <ErrorText error={error} />
      </section>
    </>
  );
}
