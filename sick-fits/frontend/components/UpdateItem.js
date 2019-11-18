import React, { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { Formik, Field } from "formik";

const UPDATE_ITEM_MUDATION = gql`
  mutation UPDATE_ITEM_MUDATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;

const UpdateItem = ({ id }) => {
  const [
    updateItem,
    { loading: isSubmitting, data: updatedData, error: updateError }
  ] = useMutation(UPDATE_ITEM_MUDATION);
  const { loading, data, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id }
  });

  return (
    <Formik
      initialValues={data && data.item}
      enableReinitialize={true}
      onSubmit={async values => {
        console.log(values);
        const res = await updateItem({ variables: values });
        console.log(res);
        Router.push({
          pathname: "/item",
          query: { id: res.data.updateItem.id }
        });
      }}
    >
      {({ values, handleSubmit, setFieldValue }) => {
        if (loading) return <p>loading data..</p>;
        return (
          <Form data-test="form" onSubmit={handleSubmit}>
            <fieldset disabled={isSubmitting} aria-busy={isSubmitting}>
              <Error error={error} />
              <Error error={updateError} />
              <label htmlFor="title">
                Title
                <Field type="text" name="title" placeholder="Title" required />
              </label>

              <label htmlFor="price">
                Price
                <Field
                  type="number"
                  name="price"
                  placeholder="Price"
                  required
                />
              </label>

              <label htmlFor="description">
                Description
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Enter A Description"
                  required
                />
              </label>
            </fieldset>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UpdateItem;
export { UPDATE_ITEM_MUDATION };
