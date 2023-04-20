import React, { useRef, useEffect } from "react";
import retroCar from "../../../assets/retro.png";
import anime from "animejs";
import classes from "./MovingCar.module.css";
import beachRoad from "../../../assets/beachRoad.jpg";

function MovingCar() {
  const carRef = useRef(null);

  useEffect(() => {
    anime({
      targets: carRef.current,
      translateX: [0, 250],

      delay: 500,

      direction: "alternate",
      loop: true,
      easing: "linear",
    });
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <img src={beachRoad} className={classes.road} alt="beach road" />
        <img ref={carRef} className={classes.car} src={retroCar} alt="car" />
      </div>
    </div>
  );
}

export default MovingCar;
