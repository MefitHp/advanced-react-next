import React from "react";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import Link from "next/link";

const Item = ({ title, description, price, id, image }) => {
  return (
    <ItemStyles>
      {image && <img src={image} alt={title} />}
      <Title>
        <Link
          href={{
            pathname: "/item",
            query: { id }
          }}
        >
          <a>{title}</a>
        </Link>
      </Title>
      <PriceTag>{price}</PriceTag>
      <p>{description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: "update",
            query: { id }
          }}
        >
          <a>Edit ✏</a>
        </Link>
        <button>Add to card</button>
        <button>Delete</button>
      </div>
    </ItemStyles>
  );
};

export default Item;
