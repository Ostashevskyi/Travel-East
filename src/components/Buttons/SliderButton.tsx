import { chevronIcn } from "../../utils";

type TButton = {
  onClick?: () => void;
  prev?: boolean;
};

const SliderButton = ({ onClick, prev }: TButton) => {
  return (
    <button
      onClick={onClick}
      className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center bg-slider-btn-bg  rounded-full px-3 py-1"
    >
      {prev ? (
        <img
          src={chevronIcn}
          alt="chevron right"
          className="rotate-180 h-3 w-3 md:h-4 md:w-4"
        />
      ) : (
        <img
          src={chevronIcn}
          alt="chevron right"
          className="h-3 w-3 md:h-4 md:w-4"
        />
      )}
    </button>
  );
};

export default SliderButton;
