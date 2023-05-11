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
      <Hero/>
      <About/>
      <Mission/>
      <Images/>
    </main>
  );
}

export default Home;
