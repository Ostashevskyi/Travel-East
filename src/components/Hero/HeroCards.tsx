import { useHeroStore } from "../../store/store";
import HeroCard from "../Cards/HeroCard";

const HeroCards = () => {
  const { hero } = useHeroStore((state) => state);

  return (
    <section className="flex gap-5 max-md:flex-col">
      {hero.cards.map((card, i) => (
        <HeroCard key={hero.cards[i].title} card={card} />
      ))}
    </section>
  );
};

export default HeroCards;
