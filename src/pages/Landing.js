import React, {useEffect, useState} from 'react';
import Button from "../components/Button";
import {useDispatch, useSelector} from "react-redux";
import ShowWheater from "../components/ShowWheater";
import AddTown from "../components/AddTown";

const Landing = ({city}) => {
    const dispatch= useDispatch()

    return (
        <div className="landing">
         <div className="sideBar">
          <AddTown/>
         </div>
         <div className="mainScreen">
           <ShowWheater city={city}/>
         </div>
        </div>
    );
};

export default Landing;
