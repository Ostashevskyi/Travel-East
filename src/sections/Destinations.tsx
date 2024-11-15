import SliderButton from "../components/Buttons/SliderButton";
import DestinationsGrid from "../components/Grids/DestinationsGrid";
import SectionWrapper from "../components/Wrappers/SectionWrapper";
import { DESTINATIONS_CARDS } from "../constants";
import useSlider from "../hooks/useSlider";
import { useDestinationStore } from "../store/destinationStore";

const Destinations = () => {
  const { destination, updateDestination } = useDestinationStore(
    (store) => store
  );

  const { handleChangeSlide } = useSlider({
    store: destination,
    updateStore: updateDestination,
    cards: DESTINATIONS_CARDS,
  });

  return (
    <SectionWrapper id="destinations">
      <div className="flex items-center justify-between gap-6 mb-8">
        <section>
          <h2 className="font-semibold text-2xl md:text-3xl mb-7">
            Discover Our Destinations
          </h2>
          <p className="uppercase font-semibold text-xl md:text-2xl">
            {destination.title}
          </p>
        </section>
        <div className="flex gap-4">
          <SliderButton prev onClick={() => handleChangeSlide(false)} />

          <SliderButton onClick={() => handleChangeSlide(true)} />
        </div>
      </div>
      <DestinationsGrid cards={destination.cards} />
    </SectionWrapper>
  );
};

export default Destinations;
