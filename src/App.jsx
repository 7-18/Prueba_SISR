import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { CarouselHome } from "./components/Home/Carousel";
import { Last } from "./components/Home/Last";
import { Products } from "./components/Home/Products";
import { Services } from "./components/Home/Services";
import { Subscription } from "./components/Home/Subscription";
import { Sustain } from "./components/Home/Sustain";
import { NavBar } from "./components/Nav";

function App() {
  const [language, setLanguage] = useState("ES")

  useEffect(() => {
    const my_language = localStorage.getItem('language')
    if (!my_language || my_language.value === undefined) localStorage.setItem('language', language);
  }, [language])
  
  return (
    <>
      <NavBar setLanguage={setLanguage} language={language} />
      <CarouselHome language={language} />
      <Products language={language} />
      <Services language={language} />
      <Sustain language={language} />
      <Last language={language} />
      <Subscription language={language} />
      <Footer language={language} />
    </>
  );
}

export default App;
