import './index.css';
import cjg1 from '../../../../assets/cjg-1.jpeg'

function About() {
    return (
        <article className="Home-about">
            <div className="container">
            <h2>Colorado's Exclusive, All Girl 4x4 Club!</h2>
            <p>Colorado 4x4 Girls offers the female 4x4 enthusiast a no-pressure environment to get out on the trails and learn new skills, while establishing close bonds through off roading trips, retreats, camping weekends and much more! Colorado 4x4 Girls works with other off roading groups and clubs to keep our trails clean, accessible and open.</p>
            <button>Learn More About Us</button>

            <div className="Home-about-linkfarm">
                <div className="Home-about-linkfarm-wrapper">
                <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                Leadership
                </div>
                <div className="Home-about-linkfarm-wrapper">
                <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                Sponsors
                </div>
                <div className="Home-about-linkfarm-wrapper">
                <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                Causes
                </div>
                <div className="Home-about-linkfarm-wrapper">
                <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                Off-road Resources
                </div>
            </div>
            </div>
        </article>
    );
}
  
export default About;


