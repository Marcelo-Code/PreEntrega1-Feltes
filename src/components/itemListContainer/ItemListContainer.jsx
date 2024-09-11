import { CardProduct } from "../cardProduct/CardProduct";
import PropTypes from "prop-types";
import "./itemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <div className="itemList">
        <CardProduct
          nombre="Sofá"
          img="https://res.cloudinary.com/dlec64dbi/image/upload/v1725985886/new-zealand-hotel-5_adxiuo.jpg"
          categoria="Living"
          precio={100000}
        />
        <CardProduct
          nombre="Sommier"
          img="https://res.cloudinary.com/dlec64dbi/image/upload/v1725986486/ep-2ITAVTYABBC77BPXJ6KLJAM4EI_ykbzza.jpg"
          categoria="Dormitorio"
          precio={100000}
        />
        <CardProduct
          nombre="Placard"
          img="https://res.cloudinary.com/dlec64dbi/image/upload/v1725987112/images_saoq2t.jpg"
          categoria="Dormitorio"
          precio={100000}
        />
        <CardProduct
          nombre="Mesa de Comedor"
          img="https://res.cloudinary.com/dlec64dbi/image/upload/v1725987207/FP-Mesa-de-comedor-Origami-Nogal-americano-inox4-1024x678_ahrz0z.jpg"
          categoria="Comedor"
          precio={100000}
        />
        <CardProduct
          nombre="Juego de Patio"
          img="https://res.cloudinary.com/dlec64dbi/image/upload/v1725987339/vib-terrace-04-1-640x427_fzc45g.jpg"
          categoria="Patio"
          precio={100000}
        />
        <CardProduct
          nombre="Mesa Ratona"
          img="https://res.cloudinary.com/dlec64dbi/image/upload/v1725987477/1-44_rw4ftg.jpg"
          categoria="Living"
          precio={100000}
        />
        <CardProduct
          nombre="Juego de Comedor"
          img="https://res.cloudinary.com/dlec64dbi/image/upload/v1725987795/images_pdw2hb.jpg"
          categoria="Comedor"
          precio={100000}
        />
      </div>
    </>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};
