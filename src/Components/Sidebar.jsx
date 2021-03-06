import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { handleRent } = bindActionCreators(actionCreators, dispatch);

  // const handleRentFilter = async (event) => {
  //   // console.log(event.target.id);
  //   var curr = event.target.id;
  //   // var NewFilter = RentFilters;

  //   if (curr === "lessthan10") {
  //     Filter.RentFilters.lessthan10 = !Filter.RentFilters.lessthan10;
  //   }
  //   if (curr === "between10and25") {
  //     Filter.RentFilters.between10and25 = !Filter.RentFilters.between10and25;
  //   }
  //   if (curr === "between25and50") {
  //     Filter.RentFilters.between25and50 = !Filter.RentFilters.between25and50;
  //   }
  //   if (curr === "morethan50") {
  //     Filter.RentFilters.morethan50 = !Filter.RentFilters.morethan50;
  //   }

  // };

  return (
    <>
      <div className="filter">
        <div className="container mt-5">
          <h4> Property Type</h4>

          <hr />

          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="Commercial"
                id="Commercial"
                name="PropertyType"
                onClick={() => {
                  handleRent("Commercial");
                }}
              />
              <label className="form-check-label" htmlFor="PropertyType">
                Commercial
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="NonCommercial"
                id="NonCommercial"
                name="PropertyType"
                onClick={() => {
                  handleRent("NonCommercial");
                }}
              />
              <label className="form-check-label" htmlFor="PropertyType">
                Non-Commercial
              </label>
            </div>
          </div>
          <hr />
          <h4 className="mt-5"> Rent /month </h4>
          <hr />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="lessthan10"
              onClick={() => {
                handleRent("lessthan10");
              }}
            />
            <label className="form-check-label" htmlFor="lessthan10">
              less than 10000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="between10and25"
              onClick={() => {
                handleRent("between10and25");
              }}
            />
            <label className="form-check-label" htmlFor="between10and25">
              10000-25000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="between25and50"
              onClick={() => {
                handleRent("between25and50");
              }}
            />
            <label className="form-check-label" htmlFor="between25and50">
              25000-50000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="morethan50"
              onClick={() => {
                handleRent("morethan50");
              }}
            />
            <label className="form-check-label" htmlFor="morethan50">
              50000+
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
