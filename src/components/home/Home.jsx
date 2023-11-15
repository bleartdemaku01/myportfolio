import "./Home.css";

import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Header from "../header/Header";
import About from "../about/About";
import Skills from "../skills/Skills";
import Services from "../services/Services";
import Work from "../work/Work";
import Qualification from "../qualification/Qualification";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />

            <div className="home__img"></div>

            <Data />
          </div>

          <ScrollDown />
        </div>
      </section>
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Testimonials />
      <Contact />
    </>
  );
}
