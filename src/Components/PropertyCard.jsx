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
              House No. 116 + {props.pid}
            </h5>

            <p className="card-text" id="location">
              <a
                style={{ color: "black", textDecoration: "none" }}
                target="_blank"
                href="https://www.google.com/maps/dir/30.2882558,75.3593723/St+Number+2,+Tapa,+Punjab+148108/@30.2947293,75.359364,16z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3910e9b681d11a53:0xfd6504d6be8dcff9!2m2!1d75.367702!2d30.3013446!3e0"
              >
                <MdLocationOn /> CheckOut Location
              </a>
            </p>
            <ul
              className="list-group list-group-flush"
              style={{ width: "90%" }}
            >
              <li className="list-group-item" id="numberOfRooms">
                1BHK-2BHK-3BHK
              </li>
              <li className="list-group-item">
                Rent : Rs.<span id="rent"> 10000 </span> /month{" "}
              </li>
              <li className="list-group-item">
                Area : <span id="area">1000</span> sqft
              </li>
              <li className="list-group-item">
                any Specific information
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
            <Facilities pid={props.pid} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
