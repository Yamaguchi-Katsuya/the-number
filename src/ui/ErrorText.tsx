export default function ErrorText({ error }: { error: string }): JSX.Element {
  if (!error) {
    return <></>;
  }

  return (
    <>
      <p className="text-red">{error}</p>
    </>
  );
}
