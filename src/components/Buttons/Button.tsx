import { TButton } from "../../types/Button";

const Button = ({ children }: TButton) => {
  return (
    <button
      id="headerBtn"
      className="w-full bg-white-cream rounded-xl px-3 py-1"
    >
      <p className="font-semibold text-black">{children}</p>
    </button>
  );
};

export default Button;
