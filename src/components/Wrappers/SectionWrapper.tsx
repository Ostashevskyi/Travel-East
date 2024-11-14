import React from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  mobileFull?: boolean;
  cn?: string;
};

const SectionWrapper = ({
  children,
  mobileFull = false,
  cn,
}: SectionWrapperProps) => {
  return (
    <section
      className={
        mobileFull
          ? `${cn} screen-max-width h-screen relative`
          : `${cn} lg:h-screen lg:max-h-fit w-full mt-16 lg:mt-[180px]`
      }
    >
      <div className="screen-max-width h-full lg:max-h-fit">{children}</div>
    </section>
  );
};

export default SectionWrapper;
