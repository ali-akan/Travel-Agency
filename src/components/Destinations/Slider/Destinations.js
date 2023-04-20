import parisFrance from "../../../assets/parisFrance.jpg";
import newYorkUsa from "../../../assets/newYorkUsa.jpg";
import londonEngland from "../../../assets/londonEngland.jpg";
import bangkokThailand from "../../../assets/bangkokThailand.jpg";
import hongKongChina from "../../../assets/hongKongChina.jpg";
import dubaiEmirates from "../../../assets/dubaiArabEmirates.jpg";
import singapore from "../../../assets/singapore.jpg";
import romeItaly from "../../../assets/romeItaly.jpg";
import macauChina from "../../../assets/macauChina.jpg";
import istanbulTurkey from "../../../assets/istanbulTurkey.jpg";

const destinationImages = {
  paris: parisFrance,
  newYork: newYorkUsa,
  london: londonEngland,
  bangkok: bangkokThailand,
  hongKong: hongKongChina,
  dubai: dubaiEmirates,
  singapore: singapore,
  rome: romeItaly,
  macau: macauChina,
  istanbul: istanbulTurkey,
};

const Destinations = (props) => {
  const { destination } = props;

  return (
    <div>
      <img src={destinationImages[destination]} alt={`${destination} view`} />
    </div>
  );
};

export default Destinations;
