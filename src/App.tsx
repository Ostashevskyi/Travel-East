import Hero from "./sections/Hero";
import Header from "./sections/Header";

import Destinations from "./sections/Destinations";

function App() {
  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <Hero />
        <Destinations />
      </div>
    </>
  );
}

export default App;
