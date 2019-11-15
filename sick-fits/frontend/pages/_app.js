import React from "react";
import App from "next/app";
import Layout from "../components/Layout";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //This exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <>
        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </>
    );
  }
}

export default withData(MyApp);
