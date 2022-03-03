import './index.css';
import Nav from '../../components/Nav';
import heroImage from '../../assets/jeep-on-dirt-road.jpeg'
import border from '../../assets/white-border-3.png'
import cjgLogo from '../../assets/cjg-logo-white.png'

function Home() {
  return (
    <div className="Home">
      <Nav/>
      <main className="Home-hero" style={{ backgroundImage: `url(${heroImage})`}}>
        <div className="Home-hero-wrapper">
          <div className="Home-hero-content">
            <img className="Home-hero-logo" src={cjgLogo} alt="Colorado 4x4 Girls Logo"/>
            <div>
              <h1>Welcome to the Colorado 4x4 Girls</h1>
              <p>A home and resource for women with all types of full size 4x4 vehicles and at every stage of their offroad journey </p>
            </div>
          </div>
        </div>
      </main>
      <div className="Home-divider">
        <img src={border} alt="grungy white border"/>
      </div>
    </div>
  );
}

export default Home;
