export type Field = {
  name: string;
  type?: string;
  required?: boolean;
};

interface NumberFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  fields: Field[];
}

const getField = (field: Field): Field => {
  return {
    name: field.name,
    type: field.type ?? 'number',
    required: field.required ?? true,
  };
};

export default function NumberForm({
  handleSubmit,
  fields,
}: NumberFormProps): JSX.Element {
  return (
    <>
      <form
        className="flex flex-col items-center space-y-5 md:space-y-12"
        onSubmit={handleSubmit}
      >
        {fields.map((field, index) => {
          field = getField(field);
          return (
            <input
              key={index}
              name={field.name}
              className="border border-solid border-black w-5/6 text-center"
              type={field.type}
              required={field.required}
            />
          );
        })}
        <button
          type="submit"
          className="bg-gray border border-solid border-yellow px-4 rounded-md"
        >
          Check!
        </button>
      </form>
    </>
  );
}
