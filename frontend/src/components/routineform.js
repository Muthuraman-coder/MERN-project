import { useState } from "react";
import { Useroutinecontext } from "../hooks/useroutinecontext";

const Routineform = () => {
    const { dispatch } = Useroutinecontext()
    const [name , setname] = useState('')
    const [body , setbody] = useState('')
    const [duration , setduration] = useState('')
    const [emptyfields , setemptyfields] = useState([])
    const [error , seterror] = useState(null)

    const handleadd = async (e) => {
        e.preventDefault()

        const routines = {name , body , duration}

        const res = await fetch('/api/routines/' , {
            method : 'POST',
            body : JSON.stringify(routines),
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
        }else{
            seterror(json.error)
            setemptyfields(json.emptyfields)
        }
    }

    return ( 
        <div className="routineform">
            <form onSubmit={handleadd}>
                <h3>Add Daily Routines</h3>
                <label>Routine Name :</label>
                <input type="text" onChange={(e) => setname(e.target.value)} value={name} 
                className={emptyfields.includes('name') ? 'error' : ''}/>
                <label> Description:</label>
                <input type="text" onChange={(e) => setbody(e.target.value)} value={body}
                className={emptyfields.includes('body') ? 'error' : ''}/>
                <label>Duration :</label>
                <input type="text" onChange={(e) => setduration(e.target.value)} value={duration}
                className={emptyfields.includes('duration') ? 'error' : ''}/>
                <button type="summit" >Add Routine</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
     );
}
 
export default Routineform;