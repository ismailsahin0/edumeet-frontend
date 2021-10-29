import axios from "axios";
import React, { useEffect } from "react";

export default function ListOfTodo({token}){
    useEffect(()=>{
        if(token){
            fetchData(token);    
        }
        
    },[token]);

    const fetchData = async (token)=>{
        console.log(token);
        const res = await axios.get('http://localhost:3001/user/sahinismail0618@gmail.com',{
            headers:{
                Authorization: 'Edumeet ' + token
            }
        })
        console.log(res);
    }
    return (
        <div>
            <h1>List of todo </h1>
        </div>
    )
}