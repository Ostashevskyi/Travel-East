import { TDestinationCard } from "../../types/Destination";
import { pointIcn, viewsIcn } from "../../utils";

const DestinationCard = ({ card }: { card: TDestinationCard }) => {
  return (
    <div
      className={`img ${card.type || ""} relative [&>div]:hover:opacity-100`}
    >
      <img className="w-full h-full" src={card.image} alt={card.title} />
      <div className="md:h-[100px] absolute w-full bottom-0 header-blur opacity-0 rounded-b-xl ">
        <p className="text-center mt-4 mb-5 font-semibold text-xl">
          {card.title}
        </p>
        <div className="flex justify-between items-center px-4 mb-4">
          <div className="flex gap-2 items-center">
            <img src={viewsIcn} alt="eye" />
            <p>{card.views}</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={pointIcn} alt="point" />
            <p>{card.destination}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
