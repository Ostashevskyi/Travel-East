import React from "react";

type TButton = {
  children: React.ReactNode;
};

const Button = ({ children }: TButton) => {
  return (
    <button id="headerBtn" className="w-full bg-white rounded-xl px-3 py-1">
      {children}
    </button>
  );
};

export default Button;
