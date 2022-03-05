import React from "react";
import { MdLocationOn } from "react-icons/md";
import Facilities from "./Facilities";
import { Link } from "react-router-dom";

const PropertyCard = (props) => {
  return (
    <>
      <div className="card my-5 mx-5" style={{ width: "85%" }}>
        <div className="row">
          <div style={{ width: "50%" }}>
            <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              className="card-img-top container mt-3 mb-3"
              alt="..."
            />
          </div>

          <div style={{ width: "35%" }} className="card-body">
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
                {props.property.Recommendation}
              </li>
            </ul>

            <button className="btn btn-primary my-2 p-1" type="button">
              <Link
                className="nav-link"
                style={{ color: "white", textDecoration: "none" }}
                to={"/" + props.pid}
              >
                More Details
              </Link>
            </button>
          </div>

          <div style={{ width: "10%", margin: "auto" }}>
            <Facilities pid={props.property.Facilities} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
