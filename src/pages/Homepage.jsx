import React from "react";
import Header from "../components/Header";
import Layout from "./Layout";
import Shirt from "../components/shirt";

const Homepage = () => {
  return (
    <Layout>
      <Header />
      <Shirt />
    </Layout>
  );
};

export default Homepage;
