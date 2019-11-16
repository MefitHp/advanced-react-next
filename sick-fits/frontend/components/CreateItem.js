import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { Formik, Field } from "formik";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
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

const initialValues = {
  title: "",
  description: "",
  image: "",
  largeImage: "",
  price: 0
};

const CreateItem = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const uploadFile = (e, setFieldValue) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sickfits");
    // const res = await fetch(
    //   "https://api.cloudinary.com/v1_1/wesbostutorial/image/upload",
    //   {
    //     method: "POST",
    //     body: data
    //   }
    // );
    // const file = await res.json();
    // this.setState({
    //   image: file.secure_url,
    //   largeImage: file.eager[0].secure_url
    // });
  };
  return (
    <Formik initialValues={initialValues}>
      {({ values, setFieldValue }) => {
        return (
          <Form
            data-test="form"
            onSubmit={async e => {
              e.preventDefault();
              setSubmitting(true);
              //   const res = await createItem();
              // change them to the single item page
              //   console.log(res);
              //   Router.push({
              //     pathname: "/item",
              //     query: { id: res.data.createItem.id }
              //   });
            }}
          >
            <fieldset disabled={isSubmitting} aria-busy={isSubmitting}>
              {/* <Error error={error} /> */}
              <label htmlFor="file">
                Image
                <Field
                  type="file"
                  name="file"
                  placeholder="Upload an image"
                  required
                  onChange={e => uploadFile(e, setFieldValue)}
                />
                {values.image && (
                  <img width="200" src={values.image} alt="Upload Preview" />
                )}
              </label>
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
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateItem;
export { CREATE_ITEM_MUTATION };
