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
          : "lg:h-screen w-full bg-sections-bg"
      }
    >
      <div className="screen-max-width">{children}</div>
    </section>
  );
};

export default SectionWrapper;
