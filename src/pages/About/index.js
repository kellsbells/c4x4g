import './index.css';
import Nav from '../../components/Nav';
import Hero from './components/Hero';
import LearnMore from './components/LearnMore';
import Footer from '../../components/Footer';

function About() {
  return (
    <main className="About">
      <Hero/>
      <LearnMore/>
    </main>
  );
}

export default About;
