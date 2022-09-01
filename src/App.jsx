import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer";
import { CarouselHome } from "./components/Home/Carousel";
import { Last } from "./components/Home/Last";
import { Products } from "./components/Home/Products";
import { Services } from "./components/Home/Services";
import { Subscription } from "./components/Home/Subscription";
import { Sustain } from "./components/Home/Sustain";
import { NavBar } from "./components/Nav";

function App() {
  return (
    <>
      <NavBar />
      <CarouselHome />
      <Products />
      <Services />
      <Sustain />
      <Last />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
