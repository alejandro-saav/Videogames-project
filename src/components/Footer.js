import classes from "./Footer.module.css";
import facebookicon from "../img/facebook.svg";
import twittericon from "../img/twitter.svg";
import linkedinicon from "../img/linkedin.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.contentcontainer}>
        <h3 className={classes.title}>Videogames Page</h3>
        <p className={classes.paragraph}>
          This is a web page made for learning purposes, there is no intention
          for making money out of this, the languajes used here are html, css,
          javascrpit with react as a framework, the data of this page is fetch
          from an api AGDB all names, covers, images and other data of the games
          are from there.
        </p>
        <div className={classes.iconcontainer}>
          <a
            href="https://www.linkedin.com/in/oscar-castro-a27576252/"
            target="_blank"
          >
            <img src={linkedinicon} width="40px" height="40px" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img src={facebookicon} width="40px" height="40px" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twittericon} width="40px" height="40px" />
          </a>
        </div>
        {/* <div className={classes.buttonscontainer}>
          <ul>
            <li>
              <NavLink to="/homepage" className={classes.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/homepage" className={classes.link}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/homepage" className={classes.link}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/homepage" className={classes.link}>
                Blog
              </NavLink>
            </li>
          </ul>
        </div> */}
      </div>
      <div className={classes.author}>Design by Oscar Castro</div>
    </div>
  );
};

export default Footer;
