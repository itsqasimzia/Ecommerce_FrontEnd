import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />
      <div className="flex justify-between space-x-4 mx-8">
        {/* <div className="my-8  " style={{ width: "370px" }}></div> */}
        <div className="w-full my-12">
          {/* Category, Search & Filter Section */}
          <section>
            <ProductCategory />
          </section>
          {/* Product Section */}
          <section>
            <SingleProduct />
          </section>
        </div>
      </div>
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
