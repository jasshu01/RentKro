import React from "react";

import { GiTap } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { RiParkingBoxLine } from "react-icons/ri";

const Facilities = (props) => {
  return (
    <>
      <div className="row" style={{fontSize:"28px"}}>

{/* {
  props.Facilities.map((facility)=>{
    < RiParkingBoxLine className="my-1"/>
  })
} */}

        <GiTap className="my-1"/>
        <ImPower className="my-1"/>
        <RiParkingBoxLine className="my-1"/>
      </div>
    </>
  );
};

export default Facilities;
