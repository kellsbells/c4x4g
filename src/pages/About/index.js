import './index.css';
import Nav from '../../components/Nav';
import { AboutLinkfarm } from '../Home/components/About';
import Hero from './components/Hero';
import Leadership from './components/Leadership';
import Causes from './components/Causes';
import Sponsors from './components/Sponsors';
import Resources from './components/Resources';

function About() {
  return (
    <main className="About">
      <Nav/>
      <Hero/>
      <div className="container">
        <AboutLinkfarm/>
      </div>
      <Leadership/>
      <Causes/>
      <Sponsors/>
      <Resources/>
    </main>
  );
}

export default About;
