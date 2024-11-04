import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Hero from "./sections/Hero";
import Header from "./sections/Header";

import { useHeroStore } from "./store/store";
import Destinations from "./sections/Destinations";

function App() {
  const { hero } = useHeroStore((state) => state);

  useGSAP(() => {
    gsap.fromTo("#bg", { opacity: 0, repeat: 1 }, { opacity: 1 });
  }, [hero]);

  return (
    <div className="w-screen h-screen font-Lexen-Exa">
      <div
        className="h-full w-full bg bg-cover bg-center relative"
        id="bg"
        style={{
          backgroundImage: `url("${hero.bg}")`,
        }}
      >
        <Header />
        <Hero />
        <Destinations />
      </div>
    </div>
  );
}

export default App;
