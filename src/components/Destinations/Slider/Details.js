import detailsPic from "../../../assets/details1.png";
import secondDetailsPic from "../../../assets/details.2.png";
import classes from "./Details.module.css";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.detailPic}>
        <img src={detailsPic} alt="a man taking snapshot of the mountain " />
        <p>
          Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Vivamus suscipit tortor eget felis porttitor volutpat.
          Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet
          elit, eget tincidunt nibh pulvinar. Sed ut perspiciaatis unde omnis
          iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo..
        </p>
        <h1>Lorem Ipsum Dolor sit</h1>
      </div>

      <div className={classes.secondDetail}>
        <ul>
          <li> Lorem ipsum dolor sit amet</li>
          <li>consectetur adipiscing elit</li>
          <li>Curabitur aliquet quam id dui</li>
          <li>Donec sollicitudin molestie malesuada.</li>
        </ul>
        <img
          src={secondDetailsPic}
          alt="a women taking a snapshot of the mountain "
        />
        <p>
          Grids is a responsive Multipurpose Template. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur aliquet quam id dui
          posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque
          in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis
          porttitor volutpat.
        </p>
      </div>
      <button onClick={() => navigate("/")} className={classes.home}>
        Go Home
      </button>
    </div>
  );
};

export default Details;
