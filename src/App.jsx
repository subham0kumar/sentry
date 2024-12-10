import "./App.css";
import About from "./Components/Sections/About";
import Contact from "./Components/Sections/Contact";
import Features from "./Components/Sections/Features";
import Footer from "./Components/Sections/Footer";
import Hero from "./Components/Sections/Hero";
import Story from "./Components/Sections/Story";
import Navbar from "./Components/Utils/Navbar";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
