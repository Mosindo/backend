import React from 'react';
import {useState} from 'react';

const Add = () => {
    const [name,setName]= useState(""); 
    const addcCharacter=()=>{
        fetch("http://localhost:8000/students",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                    name:name,
            })
        })
    }
    return (
        <>
            <h2>Add student </h2>
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={(event) => {setName(event.target.value)}} 
                    name="name" value={name} >
                </input>
                <button onClick={addcCharacter}>add name</button>
        </>
    )
}
export  default Add ;
