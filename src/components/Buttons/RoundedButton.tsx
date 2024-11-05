import React from "react";

type TButton = {
  children: React.ReactNode;
  onClick?: () => void;
};

const RoundedButton = ({ children, onClick }: TButton) => {
  return (
    <button
      onClick={onClick}
      className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center bg-slider-btn-bg  rounded-full px-3 py-1"
    >
      <p>{children}</p>
    </button>
  );
};

export default RoundedButton;
