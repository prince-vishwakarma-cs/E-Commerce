import heart from "../assets/Line.svg";
import image from "../assets/images/item1.png";
import { CartItem } from "../types/types";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const Card = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductProps) => {
  return (
    <div className="productCard">
      <div className="productImageWrapper">
        <img
          className="p-image"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
          src={photo}
          alt={image}
        />
        <div>
          <div>
            <div className="extras">
              <button className="btn1"> NEW </button>
              <button className="btn2">-50%</button>
            </div>
            <img className="like" src={heart} alt="Like" />
          </div>
          <button
            onClick={() =>
              handler({ productId, photo, name, price, quantity: 1, stock })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="details">
        <p>{name}</p>
        <span>{`₹${price}`}</span>
      </div>
    </div>
  );
};

export default Card;
