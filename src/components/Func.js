import React, { useState } from 'react'

function Func() {

    const [count,setcount] = useState(0);

    const inc =()=>{setcount(count+1)};
    const dec =()=>{setcount(count-1)};
  return (
    <div style={maindiv}>
        <h1>this is done by functional component</h1>
        <div style={maindiv}>
            <h2 style={divstyle}>{count}</h2>
            <div>
               <button onClick={inc} style={ButtonStyle}>+</button>
                <button onClick={dec} style={ButtonStyle}>-</button>
            </div>
           
        </div>


    </div>
  )
}
export const maindiv = {
  display : "flex",
  
  width:"100%",
  justifyContent: "center",
  alignItems: "center",
  flexDirection : "column"

}
export const divstyle ={ width: "100px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
  border: "2px solid #ccc",
  borderRadius: "10px" ,
  fontSize: "24px",
  fontWeight: "bold"}

export const ButtonStyle = {
  
  backgroundColor: "#4CAF50", 
  color: "white",
  margin : ".2rem 2rem",       
  border: "none",            // No border
  padding: "10px 40px",   
  fontSize: "16px",         
  borderRadius: "5px",       
  cursor: "pointer",         
  transition: "background-color 0.3s ease", 
};



export default Func