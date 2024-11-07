import DestinationCard from "../Cards/DestinationCard";

import { useDestinationStore } from "../../store/destinationStore";

import { TDestinationCard } from "../../types/Destination";

type TDestinationsGrid = {
  cards: TDestinationCard[];
};

const DestinationsGrid = ({ cards }: TDestinationsGrid) => {
  const { destination } = useDestinationStore((store) => store);

  return (
    <div
      className={`grid lg:max-h-[595px] h-full ${
        destination.title === "Korea" ? destination.title.toLowerCase() : ""
      }`}
    >
      {cards.map((card) => (
        <DestinationCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default DestinationsGrid;
