import React, { useEffect, useState } from 'react'

const ProfileFunctionalComponent = (props) => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        // API Call
        console.log("render3 api");
    })
    // const [count1] = useState(1);

  return (
    <div>
        <h3>Profile  Component</h3>
        <h3> Name : {props.name} </h3>
        <h4> Count :  {count} </h4>
        {/* <h4> Count1 :  {count1} </h4> */}
        <button onClick={()=> { setCount(count+1)}}> setCount :  </button>
    </div>
  )
}

export default ProfileFunctionalComponent;