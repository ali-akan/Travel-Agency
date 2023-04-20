import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import sky from "../../assets/sky.png";
import sun2 from "../../assets/sun2.png";
import cloud from "../../assets/cloud.png";
import cloud2 from "../../assets/cloudt.png";
import birds from "../../assets/birds.png";
import sea from "../../assets/sea.png";
import island from "../../assets/island.png";
import lightHouse from "../../assets/lighthouse.png";
import DestinationItems from "../Destinations/DestinationItems";
import MovingCar from "../Layout/Car/MovingCar";

import classes from "./ParallaxBody.module.css";

const ParallaxBody = () => {
  return (
    <Parallax pages={2} style={{ background: "white" }}>
      <ParallaxLayer speed={-0.2}>
        <div className={classes.sky}>
          <img src={sky} alt="sky" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.9}>
        <div className={classes.sun}>
          <img src={sun2} alt="sun" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.4}>
        <div className={classes.clouds}>
          <img src={cloud} alt="cloud" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.4}>
        <div className={classes.cloudst}>
          <img src={cloud2} alt="cloud" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={-0.9}>
        <div className={classes.birds}>
          <img src={birds} alt="birds" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.7}>
        <div className={classes.birdst}>
          <img src={birds} alt="birds" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.6}>
        <div className={classes.sea}>
          <img src={sea} alt="sea" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.4}>
        <div className={classes.island}>
          <img src={island} alt="island" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.3}>
        <div className={classes.lighthouse}>
          <img src={lightHouse} alt="lighthouse" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} sticky={{ start: 1, end: 1 }}>
        <div className={classes.car}>
          <MovingCar />
          <div className={classes.items}>
            <DestinationItems />
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxBody;
