import './index.css';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Images from './components/Images';

function Home() {
  return (
    <main className="Home">
      <Nav/>
      <Hero/>
      <About/>
      <Mission/>
      <Images/>
      <Footer/>
    </main>
  );
}

export default Home;
