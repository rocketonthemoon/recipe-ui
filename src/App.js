import dots from "./assets/6dots.svg";
import photo1 from "./assets/photo1.png";
import Main from "./components/Main";
import Ingredients from "./components/Ingredients";
import Stats from "./components/Stats";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Main assets={{ dots, photo1 }} />
      <div className="container">
        <Stats />
        <Ingredients />
      </div>
      <Instructions />
      <Footer />
    </>
  );
}

export default App;
