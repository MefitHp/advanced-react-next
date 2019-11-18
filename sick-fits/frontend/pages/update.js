import React from "react";
import UpdateItem from "../components/UpdateItem";

const Sell = ({ query: { id } }) => {
  console.log(id);
  return (
    <div>
      <UpdateItem id={id} />
    </div>
  );
};

export default Sell;
