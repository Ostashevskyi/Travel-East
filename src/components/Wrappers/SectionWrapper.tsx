import React from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  mobileFull?: boolean;
};

const SectionWrapper = ({
  children,
  mobileFull = false,
}: SectionWrapperProps) => {
  return (
    <section
      className={
        mobileFull
          ? "screen-max-width h-screen relative"
          : "lg:h-screen max-h-fit w-full mt-[180px]"
      }
    >
      <div className="screen-max-width h-full max-h-fit">{children}</div>
    </section>
  );
};

export default SectionWrapper;
