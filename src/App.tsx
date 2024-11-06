import Hero from "./sections/Hero";
import Header from "./sections/Header";

import Destinations from "./sections/Destinations";
import Deals from "./sections/Deals";

function App() {
  return (
    <>
      <div className="h-screen w-full font-Lexen-Exa">
        <Header />
        <Hero />
        <Destinations />
        <Deals />
      </div>
    </>
  );
}

export default App;
