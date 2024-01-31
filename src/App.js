import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import Acerca from "./Componentes/Acerca";
import Slider from "./Componentes/Slider";
import PreguntasFrecuentes from "./Componentes/PreguntasFrecuentes";


function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <PreguntasFrecuentes />
      <Acerca />
      <Footer />
    </div>
  );
}

export default App;
