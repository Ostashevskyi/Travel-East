import { TDealCard } from "../../types/Deals";
import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { checkIcn, clockIcn } from "../../utils";
import Button from "../Buttons/Button";

type DealCardProps = {
  deal: TDealCard;
};

const DealCard = ({ deal }: DealCardProps) => {
  return (
    <div className="p-4 rounded-lg bg-deals-card-bg max-w-[400px] min-[600px]:max-md:max-w-[260px] md:max-[1200px]:max-w-[300px] ">
      <img src={deal.image} alt={deal.image_alt} className="mb-1" />
      <h3 className="font-semibold text-base mb-3">{deal.title}</h3>
      <p className="font-medium text-sm mb-9">{deal.short_description}</p>
      <div className="flex justify-between items-start mb-5">
        <div className="font-semibold">
          <p className="text-sm">From</p>
          <div className="flex gap-1.5 items-center">
            <p className="text-base">$1099</p>
            <p className="text-sm text-white/80 relative before:content-[''] before:w-full before:border before:border-px before:rotate-12 before:rounded-sm before:absolute before:top-[50%] before:left-0">
              1299
            </p>
          </div>
          <p className="text-xs">*Price varies</p>
        </div>
        <div className="flex flex-col gap-1">
          <Rating
            itemStyles={{
              itemShapes: ThinStar,
              inactiveFillColor: "rgba(28, 32, 31, 1)",
              activeStrokeColor: "rgba(255, 199, 0, 1)",
              itemStrokeWidth: 1,
            }}
            className="max-w-16"
            readOnly
            halfFillMode="svg"
            value={deal.stars}
          />
          <p className="font-semibold text-sm">
            {deal.avg_rating}({deal.comments_count})
          </p>
        </div>
      </div>
      <p className="font-semibold text-sm max-w-64 mb-7">{deal.description}</p>
      <div className="flex gap-1 items-center mb-1">
        <img src={clockIcn} alt="clock" />
        <p className="text-[10px] font-semibold">{deal.days} Days</p>
      </div>
      <div className="flex gap-1 items-center">
        <img src={checkIcn} alt="check" />
        <p className="text-[10px] font-semibold">Free Cancellation</p>
      </div>
      <div className="max-w-28 float-right">
        <Button>Book now</Button>
      </div>
    </div>
  );
};

export default DealCard;
