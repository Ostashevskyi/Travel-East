import { useHeroStore } from "./store/store";

import Header from "./sections/Header";
import Hero from "./components/Hero/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
      </div>
    </div>
  );
}

export default App;
