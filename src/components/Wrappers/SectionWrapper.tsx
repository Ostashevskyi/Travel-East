import React from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  mobileFull?: boolean;
  cn?: string;
  id?: string;
};

const SectionWrapper = ({
  children,
  mobileFull = false,
  cn,
  id,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={
        mobileFull
          ? `${cn} screen-max-width h-screen relative`
          : `${cn} lg:h-screen lg:max-h-fit w-full pt-32 lg:mt-[180px]`
      }
    >
      <div className="screen-max-width h-full lg:max-h-fit">{children}</div>
    </section>
  );
};

export default SectionWrapper;
