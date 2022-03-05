import React, { useContext, useEffect } from "react";
import FilterContext from "../context/FilterContext";
import PropertyCard from "./PropertyCard";
import PropertyList from "./PropertyList";
import { useSelector } from "react-redux";
const Home = () => {
  const Filter = useSelector((state) => state.filter);

  // console.log(Filter);

  return (
    <> 

      <h1>{`${Filter.RentFilters.lessthan10}`}</h1>
      <h1>{`${Filter.RentFilters.between10and25}`}</h1>
      <h1>{`${Filter.RentFilters.between25and50}`}</h1>
      <h1>{`${Filter.RentFilters.morethan50}`}</h1>

      {/* {PropertyList.map((ele) => {
        if (
          Filter.RentFilters.lessthan10 == false &&
          Filter.RentFilters.between10and25 == false &&
          Filter.RentFilters.between25and50 == false &&
          Filter.RentFilters.morethan50 == false
        ) {
          return <PropertyCard key={ele._key} property={ele} />;
        }

        if (Filter.RentFilters.lessthan10 == true && ele.rent <= 10000) {
          return <PropertyCard key={ele._key} property={ele} />;
        }
        if (
          Filter.RentFilters.between10and25 == true &&
          ele.rent >= 10000 &&
          ele.rent <= 25000
        ) {
          return <PropertyCard key={ele._key} property={ele} />;
        }
        if (
          Filter.RentFilters.between25and50 == true &&
          ele.rent <= 50000 &&
          ele.rent >= 25000
        ) {
          return <PropertyCard property={ele} />;
        }
        if (Filter.RentFilters.morethan50 == true && ele.rent >= 50000) {
          return <PropertyCard key={ele._key} property={ele} />;
        }
      })} */}
    </>
  );
};

export default Home;
