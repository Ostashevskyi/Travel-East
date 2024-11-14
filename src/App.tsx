import Hero from "./sections/Hero";
import Header from "./sections/Header";

import Destinations from "./sections/Destinations";
import Deals from "./sections/Deals";
import AboutUs from "./sections/AboutUs";
import Feedbacks from "./sections/Feedbacks";
import Form from "./sections/Form";
import Footer from "./sections/Footer";

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
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;
