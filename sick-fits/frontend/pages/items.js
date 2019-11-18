import React from "react";
// import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Item from "../components/Item";
import styled from "@emotion/styled";

const Items = () => {
  const LIST_ITEMS = gql`
    query LIST_ITEMS {
      items {
        id
        title
        price
        description
        image
      }
    }
  `;

  const Center = styled.div`
    text-align: center;
  `;

  const ItemList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
  `;
  const { loading, data } = useQuery(LIST_ITEMS);

  return (
    <Center>
      <ItemList>
        {loading && <p>Items are loading</p>}
        {data && data.items.map(item => <Item key={item.id} {...item} />)}
      </ItemList>
    </Center>
  );
};

export default Items;
