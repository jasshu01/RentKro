import React from "react";
import { MdLocationOn } from "react-icons/md";
import Facilities from "./Facilities";
const AllDetailsPage = (props) => {
  console.log(props);
  return (
    <>
      <div className="container mx-auto">
        <div className="row">
          {" "}
          <div style={{ width: "60%" }}>
            <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              className="card-img-top mx-3 my-3"
              alt="..."
            />
          </div>
          <div style={{ width: "30%" }} className="card-body mx-3 mt-5">
            <h5 className="card-title" id="propertyID">
              {props.property.PropertyID}
            </h5>
            <h5 className="card-title2" id="propertyName">
              {props.property.ProportyName}
            </h5>

            <p className="card-text" id="location">
              <a
                style={{ color: "black", textDecoration: "none" }}
                target="_blank"
                href={props.property.Location}
              >
                <MdLocationOn /> CheckOut Location
              </a>
            </p>
            <ul
              className="list-group list-group-flush"
              style={{ width: "90%" }}
            >
              <li className="list-group-item">
                <span id="numberOfRooms">{props.property.noOfRooms}</span> BHK
              </li>
              <li className="list-group-item">
                Rent : Rs.<span id="rent"> {props.property.rent} </span> /month{" "}
              </li>

              <li className="list-group-item">
                Area : <span id="area"> {props.property.area}</span> sqft
              </li>
              <li className="list-group-item">
                Minimum Duration:{" "}
                <span id="area"> {props.property.MinDuration}</span>
              </li>


              <li className="list-group-item">
                {props.property.Recommendation}
              </li>
            </ul>
          </div>
          <div style={{ width: "7%", margin: "auto" }}>
            <Facilities pid={props.property.Facilities} />
          </div>
        </div>
        <hr />

        <div className="row">
          <h2 className="mx-4">More Photos</h2>
          <div style={{ width: "32%" }}>
            <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              className="card-img-top mx-3 my-3"
              alt="..."
            />
          </div>
          <div style={{ width: "32%" }}>
            <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              className="card-img-top mx-3 my-3"
              alt="..."
            />
          </div>
          <div style={{ width: "32%" }}>
            <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              className="card-img-top mx-3 my-3"
              alt="..."
            />
          </div>

          <hr />
          <p className="mx-5 my-5" style={{ width: "80%" }}>

         { `${props.property.Description}`}
          </p>
        </div>
      </div>
    </>
  );
};

export default AllDetailsPage;
