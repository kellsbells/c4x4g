import './index.css';
import missionImage from '../../../../assets/dirt-road-mountains.jpg'
import border from '../../../../assets/white-border-3.png'

function Mission() {
    return (
      <article className="Home-mission" style={{ backgroundImage: `url(${missionImage})`}}>
        <div className="Home-mission-wrapper">
          <div className="container">
            <h2>Our Mission</h2>
            <p>"To preserve, protect and help with the upkeep of our public lands, while creating an environment for women to network, connect, learn and thrive within a community of other female 4x4 enthusiasts."</p>
          </div>
        </div>
        <div className="Home-divider-top divider-top">
          <img src={border} alt="grungy white border"/>
        </div>
        <div className="Home-divider divider">
          <img src={border} alt="grungy white border"/>
        </div>
      </article> 
    );
  }
  
  export default Mission;

