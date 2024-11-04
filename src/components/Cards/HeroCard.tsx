import { THeroCard } from "../../types/HeroCard";

type HeroCardProps = {
  card: THeroCard;
};

const HeroCard = ({ card }: HeroCardProps) => {
  return (
    <div className="bg-blur flex-1 bg-card-bg px-16 py-7 flex gap-8">
      <img src={card.icon} alt="Arrows left and right" width={36} height={36} />
      <div>
        <h3>{card.title}</h3>
        <p>{card.text}</p>
      </div>
    </div>
  );
};

export default HeroCard;
