export default function ResultText({ result }: { result: string }): JSX.Element {
  if (!result) {
    return <></>;
  }

  return (
    <>
      <p>{result}</p>
    </>
  )
}
