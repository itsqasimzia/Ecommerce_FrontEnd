import React, { Fragment, createContext } from "react";
import { Navber, Footer, CartModal } from "../partials";
import LoginSignup from "../auth/LoginSignup";

export const LayoutContext = createContext();

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {/* <Navber /> */}

        <LoginSignup />
        <CartModal />
        {/* All Children pass from here */}
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
