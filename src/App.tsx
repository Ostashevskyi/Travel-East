import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen">
      <div
        className="h-full w-full bg bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/backgrounds/japan-bg.png')",
        }}
      >
        <Header />
      </div>
    </div>
  );
}

export default App;
