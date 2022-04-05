import React, {useEffect, useState} from 'react';
import Button from "./Button";
import Town from "./Town";
import {useDispatch, useSelector} from "react-redux";
import {changeTown, getCity} from "../redux/meteo/meteoSlice";
import uuid from 'react-uuid'

const AddTown = () => {
    const id= uuid()
    const dispatch= useDispatch()
    const[town,setTown]=useState("")
    const{meteo,city,isLoading}=useSelector(state=>state.meteo)
    const [towns,setTowns]=useState([
        {
            id: 0,
            name: 'Geneva'
        },
        {
            id: "1",
            name: 'London'
        },
        {
            id: "2",
            name: 'New York'
        },
        {
            id: "3",
            name: 'Tokyo'
        }
    ])


    const addTown=()=>{
        setTowns((prevTowns)=>{
            const updateTown=[...prevTowns];
            const timestamp= Date.now()
            const time=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
            let newTown={
                id: id,
                name:town
            }
            towns.unshift(newTown)
            return updateTown
        })
        setTown("")
    }

    const onClick=(town)=>{
        console.log(town)
        // setTown(town)
        dispatch(changeTown(town))
    }


    return (
        <div>
            <div className="containerComment">
                <input id="comment" type="text" value={town} onChange={e=>setTown(e.target.value)}/>
                {town.trim().length === 0 ?(
                    <Button  style={{width:"100px",height:"30px", opacity:"0.5"}} disabled={true} text="Search" />
                ):(
                    <Button  onClick={addTown} style={{width:"100px",height:"30px"}} disabled={false}  text="Search" />
                )}
            </div>
            <div className="listContainer" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>
                {towns.map(town=>(
                 <Town key={town.id} town={town.name} onClick={()=>onClick(town.name)}/>
                ))}
            </div>
        </div>
    );
};

export default AddTown;
