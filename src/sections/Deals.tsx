import DealCard from "../components/Cards/DealCard";

import SliderButton from "../components/Buttons/SliderButton";

import SectionWrapper from "../components/Wrappers/SectionWrapper";
import { useDealStore } from "../store/dealsStore";
import useSlider from "../hooks/useSlider";
import { DELAS_CARDS } from "../constants";

const Deals = () => {
  const { deal, updateDeal } = useDealStore((store) => store);

  const { handleChangeSlide } = useSlider({
    store: deal,
    updateStore: updateDeal,
    cards: DELAS_CARDS,
  });

  return (
    <SectionWrapper>
      <div className="flex items-center justify-between gap-6 mb-8">
        <section>
          <h2 className="font-semibold text-2xl md:text-3xl mb-7">
            Package Deals Top 2024
          </h2>
          <p className="uppercase font-semibold text-xl md:text-2xl">
            {deal.title}
          </p>
        </section>
        <div className="flex gap-4">
          <SliderButton prev onClick={() => handleChangeSlide(false)} />

          <SliderButton onClick={() => handleChangeSlide(true)} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 flex-col min-[600px]:flex-row">
        {deal.cards.map((card) => (
          <DealCard deal={card} key={card.id} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Deals;
