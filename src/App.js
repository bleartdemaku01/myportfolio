import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";

import { Helmet } from "react-helmet";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Bleart Demaku</title>
      </Helmet>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
