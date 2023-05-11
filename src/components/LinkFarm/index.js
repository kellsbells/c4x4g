import './index.css';
import cjg1 from '../../assets/cjg-1.jpeg'
import { Link } from 'react-router-dom';

function LinkFarm() {
    return (
        <div className="Home-about-linkfarm">
            <Link to="/leadership" className="Home-about-linkfarm-wrapper">
                <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                Leadership
            </Link>

            <Link to="/sponsors" className="Home-about-linkfarm-wrapper">
                <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                Sponsors
            </Link>

            <Link to="/causes" className="Home-about-linkfarm-wrapper">
                <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                Causes
            </Link>

            <Link to="/resources" className="Home-about-linkfarm-wrapper">
                <img className="Home-about-linkfarm-image" src={cjg1} alt="image of girls"/>
                Off-road Resources
            </Link>
        </div>
    )
}

export default LinkFarm;