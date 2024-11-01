import React from "react";
import Header from "./Header";

const MyLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MyLayout;
