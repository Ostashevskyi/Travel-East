import RoundedButton from "../components/Buttons/RoundedButton";
import DestinationsGrid from "../components/Grids/DestinationsGrid";
import { DESTINATIONS_CARDS } from "../constants";
import { useDestinationStore } from "../store/destinationStore";
import { chevronIcn } from "../utils";

const Destinations = () => {
  const { destination, updateDestination } = useDestinationStore(
    (store) => store
  );

  const handleChangeSlide = (toNextSlide: boolean) => {
    const currentId = destination.id;

    if (currentId === DESTINATIONS_CARDS.length - 1 && toNextSlide) {
      updateDestination(DESTINATIONS_CARDS[0]);
      return;
    }

    if (currentId === 0 && !toNextSlide) {
      updateDestination(DESTINATIONS_CARDS[DESTINATIONS_CARDS.length - 1]);
      return;
    }

    toNextSlide
      ? updateDestination(DESTINATIONS_CARDS[currentId + 1])
      : updateDestination(DESTINATIONS_CARDS[currentId - 1]);
  };

  return (
    <section className="lg:h-screen w-full bg-sections-bg">
      <div className="screen-max-width">
        <div className="flex items-center justify-between gap-6 pt-14 md:pt-20 lg:pt-28 mb-8">
          <section>
            <h2 className="font-semibold text-2xl md:text-3xl mb-7">
              Discover Our Destinations
            </h2>
            <p className="uppercase font-semibold text-xl md:text-2xl">
              {destination.title}
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
        <DestinationsGrid cards={destination.cards} />
      </div>
    </section>
  );
};

export default Destinations;
