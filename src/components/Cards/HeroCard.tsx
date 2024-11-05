import { THeroCard } from "../../types/Hero";

type HeroCardProps = {
  card: THeroCard;
};

const HeroCard = ({ card }: HeroCardProps) => {
  return (
    <div className="bg-blur flex-1 bg-card-bg md:px-16 md:py-7 px-8 py-3.5 flex gap-8 max-lg:items-center md:max-lg:flex-col">
      <img src={card.icon} alt="Arrows left and right" width={36} height={36} />
      <div>
        <h3>{card.title}</h3>
        <p>{card.text}</p>
      </div>
    </div>
  );
};

export default HeroCard;
