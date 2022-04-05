import React from 'react';
import {useSelector} from "react-redux";


const ShowWheater = () => {
    const{meteo,city}=useSelector(state=>state.meteo)
    return (
        <div className="wheaterContainer" style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
         <h1 style={{marginTop:"50px"}}> {city[0].name} </h1>
         <img style={{marginTop:"50px"}} src={`http://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`} />
            <h2> min temperature {meteo.main.temp_min} </h2>
            <h2> max temperature {meteo.main.temp_max} </h2>
        </div>
    );
};

export default ShowWheater;
