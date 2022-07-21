import './index.css';
import heroImage from '../../../../assets/jeep-on-dirt-road.jpeg'
import border from '../../../../assets/white-border-3.png'

function Hero() {
    return (
        <article className="Home-hero" style={{ backgroundImage: `url(${heroImage})`}}>
            <div className="Home-hero-wrapper">
                <div className="Home-hero-container container">
                    <div className="Home-hero-content">
                        <h1><span>Welcome to the</span><br/>Colorado 4x4 Girls</h1>
                        <h3>Colorado's All Female 4x4 Club</h3>
                        <p>A home and resource for women with all types of full size 4x4 vehicles and at every stage of their offroad journey </p>
                    </div>
                </div>
            </div>
            <div className="Home-divider">
                <img src={border} alt="grungy white border"/>
            </div>
        </article>
    );
}
  
export default Hero;