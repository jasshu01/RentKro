import { useState } from "react";
import FilterContext from "./FilterContext";

const FilterState = (props) => {
  const initial = {
    lessthan10: false,
    between10and25: false,
    between25and50: false,
    morethan50: false,
  };

  const [RentFilters, setRentFilters] = useState(initial);
  const update = (newState) => {
     
    setRentFilters(newState);
    console.log("newstaet" , newState.RentFilters);
  };

  return (
    <FilterContext.Provider value={{ RentFilters, update }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterState;
