import FilterContext from "./FilterContext";


const FilterState = (props) => {
  const RentFilters = {
    lessthan10: false,
    between10and25: false,
    between25and50: false,
    morethan50: false,
  };

  return (
    <FilterContext.Provider value={{RentFilters}}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterState;