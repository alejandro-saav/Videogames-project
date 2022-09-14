import classes from "./Footer.module.css";
import facebookicon from "../img/facebook.svg";
import twittericon from "../img/twitter.svg";
import linkedinicon from "../img/linkedin.svg";

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
          <img src={linkedinicon} width="40px" height="40px" />
          <img src={facebookicon} width="40px" height="40px" />
          <img src={twittericon} width="40px" height="40px" />
        </div>
        <div className={classes.buttonscontainer}>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.author}>Design by Oscar Castro</div>
    </div>
  );
};

export default Footer;
