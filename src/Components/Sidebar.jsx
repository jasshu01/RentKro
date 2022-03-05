import React, { useState } from "react";

const Sidebar = () => {
  const [RentFilters, setRentFilters] = useState({
    lessthan10: false,
    between10and25: false,
    between25and50: false,
    morethan50: false,
  });

  const handleRent = async (event) => {
    console.log(event.target.id);
    var curr = event.target.id;
    var NewFilter = RentFilters;

    if (curr === "lessthan10") {
      NewFilter.lessthan10 = !NewFilter.lessthan10;
    }
    if (curr === "between10and25") {
      NewFilter.between10and25 = !NewFilter.between10and25;
    }
    if (curr === "between25and50") {
      NewFilter.between25and50 = !NewFilter.between25and50;
    }
    if (curr === "morethan50") {
      NewFilter.morethan50 = !NewFilter.morethan50;
    }

    setRentFilters(NewFilter);
    console.log(RentFilters);
  };

  return (
    <>
      <div class="filter">
        <div class="container mt-5">
          <h4> Property Type</h4>

          <hr />

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="CommercialType"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Commercial
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="HouseHoldType"
            />
            <label class="form-check-label" for="flexCheckDefault">
              House Hold
            </label>
          </div>

          <hr />
          <h4 className="mt-5"> Rent /month </h4>
          <hr />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="lessthan10"
              onChange={handleRent}
            />
            <label class="form-check-label" for="lessthan10">
              less than 10000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="between10and25"
              onChange={handleRent}
            />
            <label class="form-check-label" for="between10and25">
              10000-25000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="between25and50"
              onChange={handleRent}
            />
            <label class="form-check-label" for="between25and50">
              25000-50000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="morethan50"
              onChange={handleRent}
            />
            <label class="form-check-label" for="morethan50">
              50000+
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
