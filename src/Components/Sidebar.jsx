import React from "react";

const Sidebar = () => {
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
              id="lessthan10000"
            />
            <label class="form-check-label" for="lessthan10000">
              less than 10000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="between10and25"
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
