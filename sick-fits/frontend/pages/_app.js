import React from "react";
import App from "next/app";
import Layout from "../components/Layout";

export default class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <>
        <Layout>
          <Component />
        </Layout>
      </>
    );
  }
}
