import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="w-screen h-screen font-Lexen-Exa">
      <div
        className="h-full w-full bg bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/backgrounds/japan-bg.png')",
        }}
      >
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
