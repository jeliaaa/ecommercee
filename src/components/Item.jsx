import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, price, discount }) => {
  const formatParagraph = (text) => {
    if (text.length > 15) {
      return text.slice(0, 15) + "...";
    }
    return text;}
    return (
      <Link to={"/single/" + id}>
        <div>
          <div>
            <img src={image} alt="..." />
          </div>
          <p>{formatParagraph(name)}</p>
          <p>{price ? `${price}$` : null}</p>
        </div>
      </Link>
    );
  };

  export default Item;
