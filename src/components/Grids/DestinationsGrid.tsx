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
      className={`grid ${
        destination.title === "Korea" ? destination.title.toLowerCase() : ""
      } pb-10`}
    >
      {cards.map((card) => (
        <DestinationCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default DestinationsGrid;
