interface NumberDescriptionProps {
  text: string;
  keyword: string;
}

export default function NumberDescription({
  text,
  keyword,
}: NumberDescriptionProps): JSX.Element {
  const parts = text.split(keyword, 2);

  return (
    <>
      <p>
        {parts[0]}
        <span className="text-yellow">{keyword}</span>
        {parts[1]}
      </p>
    </>
  );
}
