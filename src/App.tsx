import Hero from "./sections/Hero";
import Header from "./sections/Header";

import Destinations from "./sections/Destinations";
import Deals from "./sections/Deals";
import AboutUs from "./sections/AboutUs";
import Feedbacks from "./sections/Feedbacks";

function App() {
  return (
    <>
      <div className="w-full font-Lexen-Exa bg-sections-bg">
        <Header />
        <Hero />
        <Destinations />
        <Deals />
        <AboutUs />
        <Feedbacks />
      </div>
    </>
  );
}

export default App;
