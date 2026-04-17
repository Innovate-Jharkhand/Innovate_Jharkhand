import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AtAGlance from "./components/AtAGlance";
import Destinations from "./components/Destinations";
import Tours from "./components/Tours";
import Stats from "./components/Stats";
import News from "./components/News";
import ESG from "./components/ESG";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollFadeIn from "./hooks/useScrollFadeIn";
import "./App.css";

function App() {
  useScrollFadeIn();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[color:var(--sand)] text-[color:var(--ink)]">
      <Navbar />
      <main>
        <Hero />
        <AtAGlance />
        <Destinations />
        <Tours />
        <Stats />
        <News />
        <ESG />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
