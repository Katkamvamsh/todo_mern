const first=["vam","madu","suvarna","naveen"]

import React, { useState } from 'react'
import './Lo.css'
const index = () => {
  const[initial,setInitial]=useState(first)
  const [selected,setSelected]=useState([])
  const [set,setState]=useState([])
  const onSetHandler = (value) => {
    setSelected((prev)=>{
        return prev.includes(value)?prev.filter((name)=>{return name !==value }) :[...prev,value]
    })
  };
  const onAdding=()=>{
    setInitial((pre)=>{
      return pre.map((each)=>{
        return selected.includes(each)? (setState((pre)=>[...pre,each])): each
      })
    })
  }
 
 
    console.log(selected)
  return (<>  
    <div>Names</div>
    {initial.map((value,index)=>{
        return <div key={index}>
       <h2 className={selected.includes(value)?"a":""}  onClick={()=>{onSetHandler(value)}}>{value} </h2>
        </div>
    })}
    {/* original Ui is will be change if we used --- initial.map  --- existing UI will be not persist */}
  
    {/* original Ui is not change if we used --- first.map ---  existing UI will be persist */}
   <button onClick={onAdding}>Submit</button>
   {set.map((value)=>{
return <p>{value} </p>
   })}
    </>

  )
}

export default index