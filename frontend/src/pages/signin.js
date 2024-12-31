import { useState } from "react";
import { Usesigncontext } from "../hooks/usesigncontext";

const Signin = () => {
    const [username , setusername] = useState('')
    const [password , setpassword] = useState('')
    const [error , seterror] = useState('')
    const { dispatch } = Usesigncontext()

    const handlesummit = async (e) =>{
        e.preventDefault()

        const response = await fetch('/api/sign/signin' ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
          })
        const json = await response.json()
       
        if(response.ok){
            localStorage.setItem( 'user', JSON.stringify(json))
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
            <button type="summit">Sign In</button>
            <p>Don't have an account ? <a href="/signup">Sign Up</a></p>
        </form>
    );
}
 
export default Signin;