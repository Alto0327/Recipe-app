import Logo from "../assets/Logo.png";
import Home from "../assets/Home.png";
import Search from "../assets/Search.png";
import Linkedin from "../assets/Linkedin.png";
import GithubIcon from "../assets/GithubIcon.png";
import "./Layout.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <img src={Logo} alt="" className="Logo" />
        <div className="nav-links">
          <ul className="navTop">
            <li></li>
            <li>
              <Link to="/Home">
                <img src={Home} alt="Home button" className="Icons" />
              </Link>
            </li>
            <li>
              <Link to="/Search">
                <img src={Search} alt="Search Button" className="Icons" />
              </Link>
            </li>
          </ul>
          <ul className="navBottom">
            <li>
              <a
                href="https://www.linkedin.com/in/aldo-fonseca-a498142b2/"
                target="_blank"
              >
                <img src={Linkedin} alt="Linkedin Button" className="Icons" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Alto0327" target="_blank">
                <img src={GithubIcon} alt="Github Button" className="Icons" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
