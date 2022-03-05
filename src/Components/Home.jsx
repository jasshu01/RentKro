import React from "react";
import PropertyCard from "./PropertyCard";
import PropertyList from "./PropertyList";

const Home = () => {
  return (
    <>
      {PropertyList.map((ele) => {
        return <PropertyCard property={ele} />;
      })}
    </>
  );
};

export default Home;
