import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";
import Adds from "./Adds/Adds";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <Slider />
      <div className="flex flex-col my-12">
        <ProductCategory />
        <SingleProduct />
        <div style={{ height: "600px", border: "4px solid green" }}>
          <Adds />
        </div>
      </div>
    </div>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <div>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </div>
  );
};

export default Home;
