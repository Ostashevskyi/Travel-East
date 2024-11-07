import DealCard from "../components/Cards/DealCard";
import RoundedButton from "../components/Buttons/RoundedButton";

import useSlider from "../hooks/useSlider";

import { chevronIcn } from "../utils";
import { DELAS_CARDS } from "../constants";

import { useDealStore } from "../store/dealsStore";

const Deals = () => {
  const { deal, updateDeal } = useDealStore((store) => store);

  const { handleChangeSlide } = useSlider({
    store: deal,
    updateStore: updateDeal,
    cards: DELAS_CARDS,
  });

  return (
    <section className="lg:h-screen w-full bg-sections-bg">
      <div className="screen-max-width">
        <div className="flex items-center justify-between gap-6 pt-14 md:pt-20 lg:pt-28 mb-8">
          <section>
            <h2 className="font-semibold text-2xl md:text-3xl mb-7">
              Package Deals Top 2024
            </h2>
            <p className="uppercase font-semibold text-xl md:text-2xl">
              {deal.title}
            </p>
          </section>
          <div className="flex gap-4">
            <RoundedButton onClick={() => handleChangeSlide(false)}>
              <img
                src={chevronIcn}
                alt="chevron right"
                className="rotate-180 h-3 w-3 md:h-4 md:w-4"
              />
            </RoundedButton>
            <RoundedButton onClick={() => handleChangeSlide(true)}>
              <img
                src={chevronIcn}
                alt="chevron right"
                className="w-3 h-3 md:w-4 md:h-4"
              />
            </RoundedButton>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 flex-col min-[600px]:flex-row">
          {deal.cards.map((card) => (
            <DealCard deal={card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
