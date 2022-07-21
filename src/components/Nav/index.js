import './index.css';
import cjgLogo from '../../assets/c4x4gcolorlogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-container container">
        <div className="Nav-logo">
          <img className="Nav-logo-image" src={cjgLogo} alt="Colorado 4x4 Girls Logo"/>
        </div>
        <header className="Nav-header">
          <ul>
            <li>
              <Link to={'about'}>About Us</Link>
            </li>
            
            <li>
              <Link to={'hello'}>Membership</Link>
            </li>

            <li>
              <Link to={'hello'}>Calendar</Link>
            </li>

            <li>
              <Link to={'hello'}>Testimonials</Link>
            </li>
            
            <li>
              <Link to={'hello'}>Contact Us</Link>
            </li>
          </ul>
        </header>
        <div className="Nav-social">
          
          <a target="_blank" href="https://www.facebook.com/colorado4x4girls" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>

          <a target="_blank" href="https://www.instagram.com/colorado4x4girls/" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Nav;
