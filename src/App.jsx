import { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import HowItWorks from "./components/howitworks";
import Documentation from "./components/documentation";
import About from "./components/about";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>

        <Hero />

        <Services />

        <HowItWorks />

        <Documentation />

        <About />

        <CTA />

      </main>

      <Footer />
    </>
  );
}

export default App;