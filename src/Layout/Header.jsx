import Logo from "../assets/Logo.png";
import Home from "../assets/Home.png";
import Search from "../assets/Search.png";
import Linkedin from "../assets/Linkedin.png";
import GithubIcon from "../assets/GithubIcon.png";
import "./Layout.css";

function Header() {
  return (
    <>
      <nav>
        <ul className="nav-links">
          <li>
            <img src={Logo} alt="" />
          </li>
          <li>
            <img src={Home} alt="" />
          </li>
          <li>
            <img src={Search} alt="" />
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <img src={Linkedin} alt="" />
          </li>
          <li>
            <img src={GithubIcon} alt="" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
