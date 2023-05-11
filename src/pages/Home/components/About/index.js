import './index.css';
import { Link } from 'react-router-dom';
import LinkFarm from '../../../../components/LinkFarm';


function About() {
    return (
        <article className="Home-about">
            <div className="container">
                <h2>Colorado's <span>Exclusive</span>, All Girl 4x4 Club!</h2>
                <p>Colorado 4x4 Girls offers the female 4x4 enthusiast a no-pressure environment to get out on the trails and learn new skills, while establishing close bonds through off roading trips, retreats, camping weekends and much more! Colorado 4x4 Girls works with other off roading groups and clubs to keep our trails clean, accessible and open.</p>
                <Link to={'about'}>
                    <button className="button-primary">Learn More About Us</button>
                </Link>
                
                <LinkFarm/>
            </div>
        </article>
    );
}
  
export default About;


