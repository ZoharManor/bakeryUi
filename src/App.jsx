import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import BreadOrder from './components/BreadOrder';
import Gallery from './components/Gallery';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <BreadOrder />
        <Gallery />
        <VisitUs />
        <Footer />
      </main>
    </>
  );
}
