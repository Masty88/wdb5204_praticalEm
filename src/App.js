import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCity, getMeteo} from "./redux/meteo/meteoSlice";
import Loading from "./components/Loading";
import Landing from "./pages/Landing";



const App = () => {
    const{meteo,city,isLoading}=useSelector(state=>state.meteo)
    const dispatch= useDispatch()
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
        dispatch(getCity(city))
        console.log(city)
        if(!isLoading){
            setTimeout(()=>{
                setLoading(false)
            },1000)
        }

    },[])

    useEffect(()=>{
        if(city){
            console.log(city[0].lat)
            dispatch(getMeteo(city))
        }
    },[city])

    return (
        <>
            {loading?
                (<Loading loading={loading}/>):
                (
                        <Landing city={city}/>
                )}
        </>
    );
};

export default App;
