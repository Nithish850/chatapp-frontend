interface IProp {
  label: string;
  onChange: (value: string) => void;
}
function TextInput(props: IProp) {
  const { label, onChange } = props;
  return (
    <div className="flex flex-col my-3">
      <label htmlFor="" className="text-start">
        {label}
      </label>
      <input
        type="text"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="bg-neutral-600 outline-none border-none rounded-md p-2 text-white"
      />
    </div>
  );
}

export default TextInput;
