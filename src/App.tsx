import Hero from "./sections/Hero";
import Header from "./sections/Header";

import Destinations from "./sections/Destinations";
import Deals from "./sections/Deals";
import AboutUs from "./sections/AboutUs";

function App() {
  return (
    <>
      <div className="h-screen w-full font-Lexen-Exa">
        <Header />
        <Hero />
        <Destinations />
        <Deals />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
