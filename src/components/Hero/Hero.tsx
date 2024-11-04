import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "../Buttons/Button";

import { HERO_CITY } from "../../constants";

import HeroCards from "./HeroCards";

import { useHeroStore } from "../../store/store";

import { THero } from "../../types/Hero";

import { playIcn } from "../../utils";

const Hero = () => {
  const { hero, updateHero } = useHeroStore((state) => state);

  useGSAP(() => {
    // timeline.to("#hero-main", { x: -2000 }).from("#hero-main", { x: -800 });

    gsap.from("#hero-main", { x: -2000 });
    gsap.from("#hero-aside", { x: 200 });
    gsap.fromTo(
      "#hero-cards",
      { opacity: 0 },
      { opacity: 1, duration: 0.2, ease: "power2.out" }
    );
  }, [hero]);

  const handleHeroClick = (hero: THero) => {
    updateHero(hero);
  };

  return (
    <section className="screen-max-width h-1/2 w-full relative  ">
      <div className="relative w-full md:h-full h-full">
        <div className="absolute w-full lg:top-1/3 top-[15%] sm:top-1/4  flex max-md:flex-col justify-between items-center max-md:gap-10">
          <div id="hero-main">
            <section className="uppercase mb-12 max-md:">
              <p className="text-2xl max-sm:text-xl font-light tracking-widest">
                Rest with
              </p>
              <h1 className="font-extrabold text-9xl max-sm:text-6xl tracking-widest">
                {hero.title}
              </h1>
              <p className="text-2xl max-sm:text-xl font-light">
                Join Us and Experience the True Beauty of Asia
              </p>
            </section>
            <div className="flex items-center gap-4">
              <div className="flex-center border border-white p-7 rounded-full">
                <img src={playIcn} alt="play" width={22} height={22} />
              </div>
              <div className="flex flex-col gap-2">
                <Button>Book now</Button>
                <p>See video</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-7 max-md:flex-row max-md:items-center"
            id="hero-aside"
          >
            <button onClick={() => handleHeroClick(HERO_CITY.japan)}>1</button>
            <p className="w-14 h-px border md:rotate-90" />
            <button onClick={() => handleHeroClick(HERO_CITY.china)}>2</button>
            <p className="w-14 h-px border md:rotate-90" />
            <button onClick={() => handleHeroClick(HERO_CITY.korea)}>3</button>
          </div>
        </div>
      </div>
      <div id="hero-cards">
        <HeroCards />
      </div>
    </section>
  );
};

export default Hero;
