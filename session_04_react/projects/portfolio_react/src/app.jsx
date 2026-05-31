import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';       // <-- THÊM DÒNG IMPORT NÀY
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact';     
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />                               
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 