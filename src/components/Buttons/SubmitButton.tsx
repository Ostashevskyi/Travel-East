import { TButton } from "../../types/Button";

type TSumbitButton = TButton & {
  type: "submit" | "reset" | "button" | undefined;
};

const SubmitButton = ({ children, type }: TSumbitButton) => {
  return (
    <button
      className="bg-sections-bg text-white font-semibold text-xl py-3 rounded-full"
      type={type}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
