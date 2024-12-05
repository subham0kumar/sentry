import "./App.css";
import About from "./Components/Sections/About";
import Features from "./Components/Sections/Features";
import Hero from "./Components/Sections/Hero";
import Navbar from "./Components/Utils/Navbar";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default App;
