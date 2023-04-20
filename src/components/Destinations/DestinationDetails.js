import { useParams } from "react-router-dom";
import Details from "./Slider/Details";
import classes from "./DestinationDetails.module.css";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider/Slider";

const DestinationDetails = () => {
  const params = useParams();

  console.log(params.destinationId);
  const navigate = useNavigate();

  return (
    <div>
      <section className={classes.sect}>
        <h1 className={classes.header}>
          Destination Details
          <p>{params.destinationId}</p>
        </h1>
        <button onClick={() => navigate("/")} className={classes.home}>
          Go Home
        </button>
        <Slider />
        <Details />
      </section>
    </div>
  );
};

export default DestinationDetails;
