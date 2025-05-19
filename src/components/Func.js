import React, { useState } from 'react'

function Func() {

    const [count,setcount] = useState(0);

    const inc =()=>{setcount(count+1)};
    const dec =()=>{setcount(count-1)};
  return (
    <div>
        <h1>this is done by functional component</h1>
        <div>
            <h2>{count}</h2>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>


    </div>
  )
}

export default Func