import SliderButton from "../components/Buttons/SliderButton";
import SectionWrapper from "../components/Wrappers/SectionWrapper";

const Feedbacks = () => {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between gap-6 mb-8">
        <section>
          <h2 className="font-semibold text-2xl md:text-3xl mb-7">
            Package Deals Top 2024
          </h2>
        </section>
        <div className="flex gap-4">
          <SliderButton prev />

          <SliderButton />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Feedbacks;
