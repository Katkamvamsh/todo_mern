import React, { Fragment, useState } from 'react'
import './Todo.css'

const Todo = () => {
const[input, setInput]=useState()
const [todo,setTodo]=useState([])
const[complete,setComplete]=useState([])
    const onChangeInput=(event)=>{
setInput(event.target.value)
    }

    const addTodo=()=>{
        setTodo((pre)=>[...pre,input])
        setInput("")
    }
   const completed=(value)=>{
   complete.includes(value)? setComplete(complete.filter((item) => item !== value)) :setComplete((prev)=>[...prev,value])
    }

console.log(complete)
    
        const deleteTodo=(clickedValue)=>{ 
        const filtered= todo.filter((value)=>{return value!==clickedValue})  
        setTodo(filtered)  
        }
    const disable = input=== ""
  return (
    <Fragment>

    <h1>Todo List</h1>
    <div className='input-container'>
    <input className='input' value={input} placeholder='   enter' onChange={onChangeInput} type='text'/>
  <button onClick={addTodo} disabled={disable}>Add Todo</button>
    </div>
    {
        todo.map((value,index)=>{
            return <div key={index}> 
             <div className='todo-added'>
    <div className='a'>    <input value={value} onChange={()=>completed(value)} type="checkbox" />
        <p className={complete.includes(value)?"done":"not-done"}>{value}</p> </div>
        <button onClick={()=>deleteTodo(value)} className='delete-button'>Delete</button>
     </div>
     
     </div>
        })
    } 
    
     </Fragment>
  )
}

export default Todo
