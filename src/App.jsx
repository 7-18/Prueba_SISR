import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselHome } from "./components/Home/Carousel";
import { Products } from "./components/Home/Products";
import { Services } from "./components/Home/Services";
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
    </>
  );
}

export default App;
