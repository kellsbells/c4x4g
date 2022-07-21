import './index.css';
import cjg1 from '../../../../assets/cjg-1.jpeg'
import { Link } from 'react-router-dom';

export function AboutLinkfarm() {
    return (
        <div className="Home-about-linkfarm">
            <Link to="/about#leadership" className="Home-about-linkfarm-wrapper">
                        <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                        Leadership
                    </Link>

                    <Link to="/about#sponsors" className="Home-about-linkfarm-wrapper">
                        <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                        Sponsors
                    </Link>

                    <Link to="/about#causes" className="Home-about-linkfarm-wrapper">
                        <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                        Causes
                    </Link>

                    <Link to="/about#resources" className="Home-about-linkfarm-wrapper">
                        <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                        Off-road Resources
                    </Link>
                </div>
    )
}
function About() {
    return (
        <article className="Home-about">
            <div className="container">
                <h2>Colorado's <span>Exclusive</span>, All Girl 4x4 Club!</h2>
                <p>Colorado 4x4 Girls offers the female 4x4 enthusiast a no-pressure environment to get out on the trails and learn new skills, while establishing close bonds through off roading trips, retreats, camping weekends and much more! Colorado 4x4 Girls works with other off roading groups and clubs to keep our trails clean, accessible and open.</p>
                <Link to={'about'}>
                    <button className="button-primary">Learn More About Us</button>
                </Link>
                
                {AboutLinkfarm()}
            </div>
        </article>
    );
}
  
export default About;


