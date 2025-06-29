interface IProp {
  label: string;
}
const Button = ({ label }: IProp) => {
  return (
    <div className="flex flex-col my-5 w-40 mx-auto">
      <button
        type="submit"
        className="bg-neutral-600 outline-none border-none rounded-md p-2 text-white hover:bg-neutral-900"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
