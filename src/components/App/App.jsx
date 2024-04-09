import About from "../About/About";
import Arts from "../Arts/Arts.jsx";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Mind from "../Mind/Mind";
import Сontact from "../Сontact/Сontact";

function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero />
        <About/>
        <Mind />
        <FAQ />
        <Arts />
        <Сontact/>
      </main>
      <Footer />
    </>
  );
}

export default App;
