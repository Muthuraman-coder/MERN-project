import { useState } from "react";
import { Usesigncontext } from "../hooks/usesigncontext";

const Signup = () => {
    const [username , setusername] = useState('')
    const [password , setpassword] = useState('')
    const [error , seterror] = useState('')
    const { dispatch } = Usesigncontext()

    const handlesummit = async (e) =>{
        e.preventDefault()

        const res = await fetch('/api/sign/signup' ,  {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
          })

        const json = await res.json()

        if(res.ok){
            localStorage.setItem('user' , JSON.stringify(json))
            dispatch({type : 'Signin' , payload : json})
        }else{
            seterror(json.error)
        }
        
    }
    return (  
        <form className="sigup" onSubmit={handlesummit}>
            <label>username:</label>
            <input type="text" value={username} onChange={(e) => setusername(e.target.value)} />
            <label>password:</label>
            <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} />
            {error && <p>{error}</p>}
            <button type="summit">Sign Up</button>
            <p>if you already have account , then <a href="/">Sign In</a></p>
        </form>
    );
}
 
export default Signup;