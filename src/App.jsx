import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Documentation from "./components/Documentation";
import About from "./components/About";
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