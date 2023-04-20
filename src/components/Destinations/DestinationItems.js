import parisFrance from "../../assets/parisFrance.jpg";
import newYorkUsa from "../../assets/newYorkUsa.jpg";
import londonEngland from "../../assets/londonEngland.jpg";
import bangkokThailand from "../../assets/bangkokThailand.jpg";
import hongKongChina from "../../assets/hongKongChina.jpg";
import dubaiEmirates from "../../assets/dubaiArabEmirates.jpg";
import singapore from "../../assets/singapore.jpg";
import romeItaly from "../../assets/romeItaly.jpg";
import macauChina from "../../assets/macauChina.jpg";
import istanbulTurkey from "../../assets/istanbulTurkey.jpg";
import classes from "./DestinationItems.module.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const DestinationItems = () => {
  return (
    <div className={classes.imgs}>
      <Tilt>
        <div className={classes.col}>
          <Link to="Paris, France">
            <img src={parisFrance} alt="Paris, France" />
            <h3>
              France <span>$230</span>
            </h3>
            <strong>France 5 days</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt eius magni provident,
              doloribus
            </p>
          </Link>
        </div>
      </Tilt>
      <Tilt>
        <div className={classes.col}>
          <Link to="New York, Usa">
            <img src={newYorkUsa} alt="New York, USA" />
            <h3>
              New York <span>$330</span>
            </h3>
            <strong>New York 2 days</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt eius magni provident,
              doloribus
            </p>
          </Link>
        </div>
      </Tilt>

      <div className={classes.col}>
        <Tilt>
          <Link to="London, England">
            <img src={londonEngland} alt="London, England" />
            <h3>
              England <span>$220</span>
            </h3>
            <strong>England 2 days</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt eius magni provident,
              doloribus
            </p>
          </Link>
        </Tilt>
      </div>
      <div className={classes.col}>
        <Tilt>
          <Link to="Bangkok, Thailand">
            <img src={bangkokThailand} alt="Bangkok Thailand" />
            <h3>
              Bangkok <span>$200</span>
            </h3>
            <strong>Bangkok 7 days</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt eius magni provident,
              doloribus
            </p>
          </Link>
        </Tilt>
      </div>
      <div className={classes.col}>
        <Tilt>
          <Link to="Hong Kong, China">
            <img src={hongKongChina} alt="Hong Kong, China" />
            <h3>
              Hong Kong <span>$260</span>
            </h3>
            <strong>Hong Kong 8 days</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt eius magni provident,
              doloribus
            </p>
          </Link>
        </Tilt>
      </div>
      <div className={classes.col}>
        <Tilt>
          <Link to="Dubai, Emirates">
            <img src={dubaiEmirates} alt="Dubai, Emirates" />
            <h3>
              Dubai <span>$330</span>
            </h3>
            <strong>Dubai 3 days</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt eius magni provident,
              doloribus
            </p>
          </Link>
        </Tilt>
      </div>
      <div className={classes.col}>
        <Tilt>
          <Link to="Singapore">
            <img src={singapore} alt="Singapore" />
            <h3>
              Singapore <span>$280</span>
            </h3>
            <strong>Singapore 8 days</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt eius magni provident,
              doloribus
            </p>
          </Link>
        </Tilt>
      </div>

      <div className={classes.col}>
        <Tilt>
          <Link to="Rome, Italy">
            <img src={romeItaly} alt="Rome, Italy" />
            <h3>
              Italy <span>$140</span>
            </h3>
            <strong>Italy, Rome 3 days</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt eius magni provident,
              doloribus
            </p>
          </Link>
        </Tilt>
      </div>
      <div className={classes.col}>
        <Tilt>
          <Link to="Macau, China">
            <img src={macauChina} alt="Macau China" />
            <h3>
              Macau <span>$180</span>
            </h3>
            <strong>Macau 5 days</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt eius magni provident,
              doloribus
            </p>
          </Link>
        </Tilt>
      </div>

      <div className={classes.col}>
        <Tilt>
          <Link to="Istanbul, Turkey">
            <img src={istanbulTurkey} alt="Istanbul, Turkey" />
            <h3>
              Istanbul <span>$200</span>
            </h3>
            <strong>Istanbul, Ephesus 5 days</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt eius magni provident,
              doloribus
            </p>
          </Link>
        </Tilt>
      </div>
    </div>
  );
};

export default DestinationItems;
