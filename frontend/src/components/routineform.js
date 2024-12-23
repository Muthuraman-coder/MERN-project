import { useState } from "react";
import { Useroutinecontext } from "../hooks/useroutinecontext";

const Routineform = () => {
    const { dispatch } = Useroutinecontext()
    const [name , setname] = useState('')
    const [body , setbody] = useState('')
    const [duration , setduration] = useState('')

    const handleadd = async (e) => {
        e.preventDefault()

        const routine = {name , body , duration}

        const res = await fetch('/api/routines/' , {
            method : 'POST',
            body : JSON.stringify(routine),
            headers: {
                'Content-Type': 'application/json'
              }
        })

        const json = await res.json()
        if(res.ok){
            setname('')
            setbody('')
            setduration('')
            console.log('routine added successfully !' , json)
            dispatch({type:'Create-routines' , payload:json})
        }
    }

    return ( 
        <div className="routineform">
            <form onSubmit={handleadd}>
                <h3>Add Daily Routines</h3>
                <label>Routine Name :</label>
                <input type="text" onChange={(e) => setname(e.target.value)} value={name}/>
                <label> Description:</label>
                <input type="text" onChange={(e) => setbody(e.target.value)} value={body}/>
                <label>Duration :</label>
                <input type="text" onChange={(e) => setduration(e.target.value)} value={duration}/>
                <button type="summit" >Add Routine</button>
            </form>
        </div>
     );
}
 
export default Routineform;