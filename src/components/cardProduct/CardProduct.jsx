import "./cardProduct.css";
import Button from "@mui/material/Button";

export const CardProduct = ({ nombre, img, categoria, precio }) => {
  return (
    <div className="productCard">
      <div>
        <h3>{nombre}</h3>
      </div>
      <img src={img} alt="" />
      <div>
        <h3>{categoria}</h3>
      </div>
      <div>$ {precio}</div>
      <Button variant="contained">Agregar a Carrito</Button>
    </div>
  );
};
